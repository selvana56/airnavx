import Header from "@/components/custom/atoms/Header"
import Footer from "@/components/custom/large/Footer"
import Hero from "@/components/custom/large/Hero"
import ProjectSections from "@/components/custom/large/projectSection/ProjectSections"
import ProjectSoftware from "@/components/custom/large/ProjectSoftware"
import TeamMembers from "@/components/custom/large/TeamMembers"
import VideoTrial from "@/components/custom/large/VideoTrial"


export default function Home() {
  return (
   <>
   <Header />
    <Hero />
    <ProjectSoftware />
    <ProjectSections />
    <VideoTrial />
    <TeamMembers />
    <Footer />
   </>
  )
}