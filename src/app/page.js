import Banner from "@/components/HomePage/Banner";
import LearningTips from "@/components/HomePage/LearningTips";
import PopularCourses from "@/components/HomePage/PopularCourses";


export default function Home() {
  return (
    <div>
      <Banner />
      <PopularCourses />
      <LearningTips/>
    </div>
  );
}
