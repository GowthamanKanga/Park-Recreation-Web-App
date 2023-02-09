import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const mockData = [
  {
    title: "Post 1",
    description: "This is the first post",
    username: "User 1",
    date: "Jan 1, 2021",
    image: "https://via.placeholder.com/50x50",
  },
  {
    title: "Post 2",
    description: "This is the second post",
    username: "User 2",
    date: "Jan 2, 2021",
    image: "https://via.placeholder.com/50x50",
  },
  {
    title: "Post 3",
    description: "This is the third post",
    username: "User 3",
    date: "Jan 3, 2021",
    image: "https://via.placeholder.com/50x50",
  },
];

function ChatForum() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setPosts(mockData);

    const socket = socketIOClient("http://localhost:3000");
    socket.on("new-post", (post) => {
      setPosts([...posts, post]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: message,
      description: message,
      username: "User 4",
      date: new Date().toLocaleString(),
      image: "https://via.placeholder.com/50x50",
    };

    setPosts([...posts, post]);
    setMessage("");

    const socket = socketIOClient("http://localhost:3000");
    socket.emit("new-post", post);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      post.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const pageSize = 3;
  const pageCount = Math.ceil(filteredPosts.length / pageSize);
  const currentPosts = filteredPosts.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  return (
    <div>
      <div className="flex justify-center h-screen">
        <div className="w-1/2">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full p-2 border border-gray-400"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <main
            className="flex-1 overflow-

y-scroll p-4"
          >
            {currentPosts.map((post, index) => (
              <div
                key={index}
                className="border border-gray-400 rounded p-4 mb-4"
              >
                <div className="flex">
                  <img src={post.image} alt="User avatar" />
                  <div className="ml-4">
                    <h3 className="text-lg">{post.title}</h3>
                    <p className="text-gray-600">{post.description}</p>
                    <p className="text-gray-600">
                      by {post.username} on {post.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </main>
          <div className="flex justify-between mt-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
            >
              Prev
            </button>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage + 1 === pageCount}
            >
              Next
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Add a new post..."
                className="w-full p-2 border border-gray-400"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Add post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatForum;
