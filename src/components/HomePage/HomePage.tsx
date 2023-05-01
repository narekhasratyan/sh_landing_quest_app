import HomePageHeader from "@/components/HomePage/HomePageHeader/HomePage.Header";
import HomePageAboutUs from "@/components/HomePage/HomePageAboutUs/HomePageAboutUs";
import HomePageTechnologies from "@/components/HomePage/HomePageTechnologies/HomePageTechnologies";
import HomePageSteps from "@/components/HomePage/HomePageSteps/HomePageSteps";
import HomePageQuestions from "@/components/HomePage/HomePageQuestions/HomePageQuestions";

export default function HomePage() {
  return (
    <div>
      <HomePageHeader />
      <HomePageAboutUs />
      <HomePageTechnologies />
      <HomePageSteps />
      <HomePageQuestions />
    </div>
  );
}
