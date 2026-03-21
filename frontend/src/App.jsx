import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import LearningPaths from "./pages/LearningPaths"
import Projects from "./pages/Projects"
import Contributors from "./pages/Contributors"
import LearningPathDetail from "./pages/LearningPathDetail"
import TopicDetail from "./pages/TopicDetail"
import DsaTopicRoadmap from "./pages/DsaTopicRoadmap"
import AiMlTopicDetail from "./pages/AiMlTopicDetail"
import AiMlPointDetail from "./pages/AiMlPointDetail"
import CssOverview from "./pages/CssOverview"
import CssSubtopicDetail from "./pages/CssSubtopicDetail"
import JavascriptOverview from "./pages/JavascriptOverview"
import JavascriptSubtopicDetail from "./pages/JavascriptSubtopicDetail"
import ReactOverview from "./pages/ReactOverview"
import ReactSubtopicDetail from "./pages/ReactSubtopicDetail"
import HtmlTopicRoadmap from "./pages/HtmlTopicRoadmap"
import HtmlPointDetail from "./pages/HtmlPointDetail"

import AddProject from "./pages/AddProject";
import ProjectDetail from "./pages/ProjectDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/learning-paths/:slug" element={<LearningPathDetail />} />
        <Route path="/dsa/:topicId" element={<DsaTopicRoadmap />} />
        <Route path="/dsa/:topicId/:pointId" element={<TopicDetail />} />
        <Route path="/ai-ml/:topicId" element={<AiMlTopicDetail />} />
        <Route path="/ai-ml/:topicId/:pointId" element={<AiMlPointDetail />} />
        <Route path="/web-development/:topicId" element={<HtmlTopicRoadmap />} />
        <Route path="/web-development/:topicId/:pointId" element={<HtmlPointDetail />} />
        <Route path="/css" element={<CssOverview />} />
        <Route path="/css/:topicId/:subtopicId" element={<CssSubtopicDetail />} />
        <Route path="/javascript" element={<JavascriptOverview />} />
        <Route path="/javascript/:topicId/:subtopicId" element={<JavascriptSubtopicDetail />} />
        <Route path="/react" element={<ReactOverview />} />
        <Route path="/react/:topicId/:subtopicId" element={<ReactSubtopicDetail />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  )
}

export default App
