import { dummyPostsData } from "@/assets/assets";
import Loading from "@/components/Loading";
import StoriesBar from "@/components/StoriesBar";
import { useEffect, useState } from "react";

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeeds = async () => {
      setFeeds(dummyPostsData);
      setLoading(false);
    };
    fetchFeeds();
  }, []);

  return !loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8">
      {/* Stories and post list  */}
      <StoriesBar />
      <div>
        <h1>Stories here</h1>
        <div className="p-4 space-y-6">List of post</div>
      </div>
      {/* Right sidebar */}
      <div>
        <div>
          <h1>Sponsored</h1>
        </div>
        <h1>Recent messages</h1>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Feed;
