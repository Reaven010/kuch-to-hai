import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Briefcase } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here you'll find more information about me, what I do, and my current skills in terms of programming and
            technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get to know me!</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a <strong>Full Stack Web Developer</strong> building the Front-end and Back-end of Websites and Web
                Applications that leads to the success of the overall product. Check out some of my work in the Projects
                section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have learned over the years in Web Development
                so it can help other people of the Dev Community.
              </p>
              <p>
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity
                that matches my skills and experience then don't hesitate to contact me.
              </p>
            </div>
            <Button className="mt-6">Contact Me</Button>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">My Experience</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-md">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Senior Frontend Developer</h4>
                      <p className="text-sm text-muted-foreground">Tech Company • 2021 - Present</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-md">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Full Stack Developer</h4>
                      <p className="text-sm text-muted-foreground">Web Agency • 2018 - 2021</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-md">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Computer Science Degree</h4>
                      <p className="text-sm text-muted-foreground">University of Technology • 2014 - 2018</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

