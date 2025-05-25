import AllPost from "@/components/common/Insights/AllPost/AllPost";
import Newsletter from "@/components/common/Insights/NewsLetter/NewsLetter";
import Post from "@/components/common/Insights/RecentPost/Post";
import SearchInsight from "@/components/common/Insights/SearchInsight/SearchInsight";

function Seo() {
 return(
  <section className="">
  <SearchInsight />
  <Post />
  <AllPost />
  <Newsletter />
  </section>
 );
};

export default Seo;