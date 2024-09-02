"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState, useRef } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);
  const hasIncremented = useRef(false);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });

        if (error) {
          console.error("Error incrementing view count inside try block:", error);
        }
      } catch (error) {
        console.error("An error occurred while incrementing the view count:", error);
      }
    };

    if (!noCount && !hasIncremented.current) {
      incrementView();
      hasIncremented.current = true;
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from("views")
          .select("count")
          .match({ slug: slug })
          .single();

        if (error) {
          console.error("Error fetching view count:", error);
        } else {
          setViews(data.count);
        }
      } catch (error) {
        console.error("An error occurred while fetching the view count:", error);
      }
    };

    if (showCount) {
      getViews();
    }
  }, [slug, showCount]);

  return (
    <div>
      {showCount && <span>{views} views</span>}
    </div>
  );
};

export default ViewCounter;