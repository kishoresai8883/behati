
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Shield, Cloud, Code } from 'lucide-react';

const Solution2 = () => {
  return (
    <div className="min-h-screen bg-background my-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Welcome to 
            <span className="text-primary"> Tech Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Your trusted partner for comprehensive IT services and digital transformation solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link 
              to="/it-services"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-medium"
            >
              Explore IT Services
              <ArrowRight size={20} />
            </Link>
            <button className="border border-border text-foreground px-8 py-4 rounded-lg hover:bg-accent transition-all duration-300 font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions to power your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure" },
              { icon: Shield, title: "Cybersecurity", desc: "Advanced threat protection" },
              { icon: Monitor, title: "IT Support", desc: "24/7 technical assistance" },
              { icon: Code, title: "Development", desc: "Custom software solutions" }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/it-services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution2;