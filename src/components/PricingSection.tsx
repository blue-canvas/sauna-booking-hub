import { motion } from "framer-motion";
import { Check, Clock, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "レギュラー",
    price: "2,500",
    duration: "90分",
    description: "サウナデビューに最適なお手軽プラン",
    features: [
      "ドライサウナ利用",
      "水風呂利用",
      "休憩スペース",
      "タオル1枚",
    ],
    popular: false,
  },
  {
    name: "プレミアム",
    price: "4,000",
    duration: "120分",
    description: "全施設を堪能できる人気No.1プラン",
    features: [
      "全サウナ利用可能",
      "水風呂・露天風呂",
      "プレミアム休憩室",
      "タオル・バスローブ",
      "ミネラルウォーター",
      "ロウリュサービス",
    ],
    popular: true,
  },
  {
    name: "VIP",
    price: "8,000",
    duration: "時間無制限",
    description: "贅沢な時間を過ごしたい方へ",
    features: [
      "プレミアム全特典",
      "個室休憩室",
      "専用ロッカー",
      "アメニティセット",
      "ドリンク飲み放題",
      "プライベートロウリュ",
    ],
    popular: false,
  },
];

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
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            料金プラン
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ご利用シーンに合わせて最適なプランをお選びください
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl p-8 shadow-card hover:shadow-warm transition-all duration-300 ${
                plan.popular ? "ring-2 ring-accent scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-warm text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    人気No.1
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-serif font-bold text-foreground">¥{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/回</span>
                </div>
                <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
                onClick={scrollToBooking}
              >
                このプランで予約
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-card">
            <Users className="w-5 h-5 text-accent" />
            <span className="text-muted-foreground text-sm">
              グループ割引: 3名様以上で10%OFF
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
