import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

const timeSlots = [
  "10:00", "11:00", "12:00", "13:00", "14:00", 
  "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
];

const plans = [
  { value: "regular", label: "レギュラー（90分）- ¥2,500" },
  { value: "premium", label: "プレミアム（120分）- ¥4,000" },
  { value: "vip", label: "VIP（時間無制限）- ¥8,000" },
];

export const BookingSection = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [guests, setGuests] = useState<string>("1");
  const [plan, setPlan] = useState<string>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !plan || !name || !phone || !email) {
      toast.error("すべての項目を入力してください");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("ご予約を承りました", {
      description: `${format(date, "yyyy年MM月dd日", { locale: ja })} ${time}〜のご予約を受け付けました。確認メールをお送りしますのでご確認ください。`,
    });
    
    // Reset form
    setDate(undefined);
    setTime(undefined);
    setGuests("1");
    setPlan(undefined);
    setName("");
    setPhone("");
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="py-24 bg-background">
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
            Reservation
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            ご予約
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            オンラインで簡単にご予約いただけます
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card space-y-6">
            {/* Date & Time Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Date Picker */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  ご利用日
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-background hover:bg-secondary"
                    >
                      {date ? (
                        format(date, "yyyy年MM月dd日", { locale: ja })
                      ) : (
                        <span className="text-muted-foreground">日付を選択</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Picker */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  ご利用時間
                </label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="時間を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}〜
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Guests & Plan Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  人数
                </label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}名様
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Plan */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  プラン
                </label>
                <Select value={plan} onValueChange={setPlan}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="プランを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    {plans.map((p) => (
                      <SelectItem key={p.value} value={p.value}>
                        {p.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-4 border-t border-border">
              <h4 className="font-medium text-foreground">お客様情報</h4>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">お名前</label>
                <Input
                  type="text"
                  placeholder="山田 太郎"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">電話番号</label>
                  <Input
                    type="tel"
                    placeholder="090-1234-5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">メールアドレス</label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "予約処理中..." : "予約を確定する"}
            </Button>

            <p className="text-center text-muted-foreground text-xs">
              ※ 予約確定後、確認メールをお送りします
              <br />
              ※ キャンセルは前日17時までにお電話ください
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
