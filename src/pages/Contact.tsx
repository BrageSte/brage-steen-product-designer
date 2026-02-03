import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ui/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <Section animate={false}>
        <div className="container-narrow">
          <div className="max-w-xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-display-xl mb-4">Kontakt</h1>
              <p className="text-body-lg text-muted-foreground">
                Har du et prosjekt eller bare vil slå av en prat? Send meg en
                melding.
              </p>
            </div>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
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
            </div>

            {/* Contact form */}
            <div className="bg-card rounded-lg p-6 md:p-8">
              <h2 className="text-display-sm mb-6">Send en melding</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
