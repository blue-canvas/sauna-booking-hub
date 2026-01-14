import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PricingSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-widest uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            料金
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            贅沢なサウナ体験をお楽しみください
          </p>
        </motion.div>

        {/* Single Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md mx-auto"
        >
          <div className="relative bg-card rounded-2xl p-10 shadow-card hover:shadow-warm transition-all duration-300 ring-2 ring-accent">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-warm text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                全施設利用可能
              </span>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-lg">3時間</span>
              </div>
              
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-5xl md:text-6xl font-serif font-bold text-foreground">¥15,000</span>
              </div>
              <p className="text-muted-foreground text-sm mb-8">+ 税</p>

              <Button
                variant="hero"
                className="w-full"
                size="lg"
                onClick={scrollToBooking}
              >
                予約する
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
