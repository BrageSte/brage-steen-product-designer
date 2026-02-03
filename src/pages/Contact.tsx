import { ArrowUpRight, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="max-w-xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="text-caption block mb-2">Kontakt</span>
              <h1 className="text-display-xl mb-4">Ta kontakt</h1>
              <p className="text-body-lg text-muted-foreground">
                Har du et prosjekt eller bare vil slå av en prat? Send meg en
                melding.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4 mb-12">
              <a
                href="mailto:hei@bragesteen.no"
                className="group flex items-center justify-between p-5 bg-card rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">E-post</p>
                  <p className="font-medium">hei@bragesteen.no</p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </a>
              <a
                href="https://linkedin.com/in/bragesteen"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-card rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                  <p className="font-medium">Brage Steen</p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </a>
              <a
                href="https://instagram.com/bragesteen"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-card rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Instagram</p>
                  <p className="font-medium">@bragesteen</p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </a>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="mailto:hei@bragesteen.no"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
              >
                <Mail size={20} />
                Send e-post
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
