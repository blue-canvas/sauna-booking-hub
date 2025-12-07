import { motion } from "framer-motion";
import { Droplets, Thermometer, Wind, Heart } from "lucide-react";
import drySaunaImage from "@/assets/dry-sauna.jpg";
import steamSaunaImage from "@/assets/steam-sauna.jpg";
import outdoorBathImage from "@/assets/outdoor-bath.jpg";

const facilities = [
  {
    title: "ドライサウナ",
    description: "本場フィンランド式の高温ドライサウナ。ロウリュで心地よい蒸気をお楽しみください。",
    temperature: "90-100°C",
    image: drySaunaImage,
    icon: Thermometer,
  },
  {
    title: "スチームサウナ",
    description: "肌に優しいミストサウナ。美容効果も期待でき、女性に人気です。",
    temperature: "45-50°C",
    image: steamSaunaImage,
    icon: Droplets,
  },
  {
    title: "露天水風呂",
    description: "サウナ後の水風呂は格別。自然を感じながらクールダウン。",
    temperature: "15-17°C",
    image: outdoorBathImage,
    icon: Wind,
  },
];

const benefits = [
  { icon: Heart, title: "デトックス効果", description: "発汗により体内の老廃物を排出" },
  { icon: Droplets, title: "美肌効果", description: "毛穴の汚れを落とし肌を清潔に" },
  { icon: Thermometer, title: "代謝向上", description: "血行促進で基礎代謝をアップ" },
  { icon: Wind, title: "リラックス", description: "自律神経を整えストレス解消" },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
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
            Our Facilities
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            施設のご案内
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            厳選された設備と空間で、最高のサウナ体験をお届けします
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-warm transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <facility.icon className="w-5 h-5 text-sauna-glow" />
                  <span className="text-sauna-glow text-sm">{facility.temperature}</span>
                </div>
                <h3 className="text-2xl font-serif text-primary-foreground mb-2">
                  {facility.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-serif text-foreground mb-4">
            サウナの効果
          </h3>
          <p className="text-muted-foreground">
            定期的なサウナ利用で得られる健康効果
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-warm transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
