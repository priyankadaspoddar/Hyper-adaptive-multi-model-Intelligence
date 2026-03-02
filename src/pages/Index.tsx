import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CTA />
      <Features />
      <HowItWorks />

      {/* Algorithm Details Section */}
      <section className="py-12 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-6 border-border/50 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Algorithms Behind the Experience</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">Resume-based Interview</h3>
            <p className="text-muted-foreground mb-3 text-sm">
              Our resume interview flow performs entirely client-side using simple yet effective heuristics:
            </p>
            <ul className="list-disc list-inside mb-4 text-sm text-foreground">
              <li><strong>Text Extraction</strong> – PDF resumes are parsed for selectable text; users can also paste manually.</li>
              <li><strong>Skill Detection</strong> – The text is normalized and scanned for known languages, frameworks, and tools. A fallback regex captures other tokens when no matches are found. Experience level is guessed from keywords such as “intern” or “5+ years”.</li>
              <li><strong>Question Generation</strong> – Detected skills seed templated questions (technical, behavioral, HR). Up to three tech questions are chosen plus behavioral prompts and a general HR query.</li>
              <li><strong>Answer Analysis</strong> – Spoken responses are transcribed via the Web Speech API. Answers are scored on:</li>
              <ul className="list-disc list-inside ml-6 text-sm">
                <li>Content (keyword matching against expected topics)</li>
                <li>Clarity (articulation metrics from the speech analyzer)</li>
                <li>Confidence (optional video frame analysis for facial cues)</li>
              </ul>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mb-2">Non‑verbal Communication</h3>
            <p className="text-muted-foreground mb-3 text-sm">
              Video and audio are analyzed using MediaPipe models and classic signal processing to infer body language metrics:
            </p>
            <ul className="list-disc list-inside mb-4 text-sm text-foreground">
              <li><strong>Face &amp; Emotion</strong> – A FaceLandmarker tracks landmarks and blendshapes to compute eye contact, gaze direction, micro‑expressions, and emotions using FACS heuristics.</li>
              <li><strong>Posture</strong> – A PoseLandmarker evaluates uprightness, shoulder alignment, head position, and movement stability.</li>
              <li><strong>Gestures</strong> – A GestureRecognizer counts hand motions and variety, estimating engagement and expressiveness.</li>
              <li><strong>Audio Metrics</strong> – Audio is captured from the video element; a YIN pitch detection algorithm measures pitch and stability, volume, speech rate, and infers basic vocal emotions.</li>
              <li><strong>Confidence Scoring</strong> – The separate analyses are weighted by detection quality into an overall confidence score (0‑100) shown alongside interview feedback.</li>
            </ul>
            <p className="text-xs text-muted-foreground">
              All models run locally in the browser; no media is uploaded unless you choose to share it. This transparency ensures privacy while providing rich feedback.
            </p>
          </Card>
        </div>
      </section>

      <Benefits />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Index;
