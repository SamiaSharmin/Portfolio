import React from "react";
import './index.css'
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Samia Sharmin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Software Developer • AI Enthusiast • .NET & React Learner
        </motion.p>

        <div className="flex gap-4 mt-6">
          <a href="/CV_SAMIA.pdf" download>
            <Button variant="outline" className="rounded-2xl shadow-md">
              Download CV
            </Button>
          </a>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          Motivated Computer Science undergraduate with a strong interest in software development, web technologies, and database systems. I enjoy building efficient, scalable, and user‑friendly applications while continuously learning new tools and frameworks. I am currently seeking opportunities where I can apply my technical skills and grow as a professional software engineer.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="rounded-2xl shadow-md"><CardContent className="p-6"><h3 className="font-semibold mb-2">Programming</h3><p>C#, C++, Java, PHP, Python, Kotlin</p></CardContent></Card>
          <Card className="rounded-2xl shadow-md"><CardContent className="p-6"><h3 className="font-semibold mb-2">Frameworks & DB</h3><p>ASP.NET, MVC, SQL Server, MySQL</p></CardContent></Card>
          <Card className="rounded-2xl shadow-md"><CardContent className="p-6"><h3 className="font-semibold mb-2">Tools & Concepts</h3><p>Git, Visual Studio, VS Code, OOP, SDLC, Data Structures</p></CardContent></Card>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Education</h2>
        <Card className="rounded-2xl shadow-md mb-6"><CardContent className="p-6"><h3 className="font-semibold">BSc in Computer Science & Engineering</h3><p>American International University‑Bangladesh (2022–Present)</p><p className="text-sm text-gray-600">CGPA: 3.95</p></CardContent></Card>
        <Card className="rounded-2xl shadow-md mb-6"><CardContent className="p-6"><h3 className="font-semibold">Higher Secondary School Certificate</h3><p>Milestone School and College (2019-2021)</p><p className="text-sm text-gray-600">GPA: 5.00</p></CardContent></Card>
        <Card className="rounded-2xl shadow-md"><CardContent className="p-6"><h3 className="font-semibold">Secondary School Certificate(2017-2019)</h3><p>Milestone School and College</p><p className="text-sm text-gray-600">GPA: 5.00</p></CardContent></Card>
      </section>

      {/* Experience */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">Experience</h2>
        <div className="max-w-5xl mx-auto space-y-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold">Budget Tracker Application</h3>
              <p className="text-sm text-gray-600">C#, .NET, SQL Server</p>
              <p>Developed a budget and expense tracking system using C#, .NET and SQL Server. Implemented CRUD operations, monthly summaries and category-wise expense tracking. Applied layered architecture, entity framework and LINQ.</p> 
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold">Web‑Based Bus Ticket Booking System (GoBus)</h3>
              <p className="text-sm text-gray-600">PHP, MySQL</p>
              <p>Developed a web-based e-ticketing system enabling users to book bus tickets remotely. Implemented ticket booking, route management and bus company management features. Designed and managed a MySQL database for storing user and booking data. Built backend functionality using PHP with secure data handling practices.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold">Car Renting service - UTHAO </h3>
              <p className="text-sm text-gray-600">C#, MySQL</p>
              <p>Developed a car rental management application to streamline vehicle booking and tracking. Implemented booking, rental history and vehicle management modules using C#. Integrated database systems to ensure data consistency and efficient retrieval. Applied object-oriented programming principles for modular and maintainable code.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Achievements</h2>
        <Card className="rounded-2xl shadow-md"><CardContent className="p-6"><p>Dean’s Award recipient for outstanding academic performance in Fall 2023–24, Spring 2023–24 and Fall 2024–25.</p></CardContent></Card>
      </section>

      {/* Research */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">Research</h2>
        <div className="max-w-5xl mx-auto">
          <Card className="rounded-2xl shadow-md"><CardContent className="p-6"><h3 className="font-semibold mb-2">IoT‑Enabled Pest Detection & Disease Management for Agriculture 4.0</h3><p>Worked in a four‑member research team contributing to system design, data analysis, and implementation of an IoT‑based agricultural monitoring solution. Presented the research at the ICDSAIA Conference 2025 in Dhaka.</p></CardContent></Card>
        </div>
      </section>

      {/* Extracurricular */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Extracurricular</h2>
        <Card className="rounded-2xl shadow-md"><CardContent className="p-6"><p>Research Member, Tech Wing — American International University‑Bangladesh (AIUB). Collaborated on technical initiatives, research activities, and knowledge sharing within the university tech community.</p></CardContent></Card>
      </section>

      {/* Contact */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact</h2>

        <div className="flex justify-center gap-6">
          <a href="mailto:samiasharmin7654@gmail.com">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/SamiaSharmin">
            <Github className="w-6 h-6" />
          </a>
          {/* <a href="https://linkedin.com/">
            <Linkedin className="w-6 h-6" />
          </a> */}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Samia Sharmin. All rights reserved.
        </p>
      </section>
    </div>
  );
}
