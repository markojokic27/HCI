"use client";
import { notFound } from 'next/navigation';
import products from '../../../data/products.json'; // Import product data from JSON file
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { useEffect, useState } from 'react';



// Define comment type
type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    notFound(); // If product is not found, trigger a 404
  }

  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch comments when component mounts
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Comment[] = await response.json();
        setComments(data.filter(comment => comment.postId === product.id)); // Filter comments for this product
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [product.id]);

  return (
    <>
      <Layout className="mt-28">
        <LayoutRow>
          <LayoutColumn>
            <div>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow>
          <LayoutColumn>
            <div>
              <h2>Comments</h2>
              {loading ? (
                <p>Loading comments...</p>
              ) : comments.length > 0 ? (
                <ul>
                  {comments.map((comment) => (
                    <li key={comment.id}>
                      <strong>{comment.name} ({comment.email}):</strong>
                      <p>{comment.body}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No comments available for this product.</p>
              )}
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}
