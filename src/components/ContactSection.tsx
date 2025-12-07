import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "住所",
    content: "〒150-0001\n東京都渋谷区神宮前1-2-3\nサウナビル 3F",
  },
  {
    icon: Phone,
    title: "電話番号",
    content: "03-1234-5678",
  },
  {
    icon: Mail,
    title: "メール",
    content: "info@sauna-example.jp",
  },
  {
    icon: Clock,
    title: "営業時間",
    content: "10:00 - 22:00\n（最終受付 21:00）\n定休日：毎週火曜日",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
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
            Access & Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            アクセス
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            JR原宿駅より徒歩5分。お気軽にお越しください。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-card h-[400px] bg-muted"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7477897014196!2d139.70265381525882!3d35.66927793748847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca3c4cfffff%3A0x620120437913403b!2z5Y6f5a6_6aeF!5e0!3m2!1sja!2sjp!4v1703123456789"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="店舗の地図"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
