import { Instagram, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sauna-wood py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-2">
              湯けむり
            </h3>
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} 湯けむりサウナ. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:bg-primary-foreground/20 hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:bg-primary-foreground/20 hover:text-primary-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:bg-primary-foreground/20 hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/60">
          <a href="#" className="hover:text-primary-foreground transition-colors">
            プライバシーポリシー
          </a>
          <a href="#" className="hover:text-primary-foreground transition-colors">
            利用規約
          </a>
          <a href="#" className="hover:text-primary-foreground transition-colors">
            特定商取引法に基づく表記
          </a>
        </div>
      </div>
    </footer>
  );
};
