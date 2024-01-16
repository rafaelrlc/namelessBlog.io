"use client";
import { useState, useEffect } from "react";

interface Author {
  id: number;
  name: string;
  email: string;
  password: string;
  username: string;
}

interface Tag {
  id: number;
  name: string;
  color: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  date: number;
  author: Author;
  tags: Tag[];
}

const useGetPost = () => {
  const [data, setData] = useState<Post | undefined>(undefined);

  return data;
};

export default useGetPost;
