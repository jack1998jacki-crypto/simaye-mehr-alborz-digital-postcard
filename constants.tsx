import { 
  Palette, 
  Video, 
  MonitorSmartphone, 
  Lightbulb, 
  Clock, 
  Target, 
  Users, 
  Sparkles 
} from 'lucide-react';
import { CompanyInfo, ServiceItem, ValueItem } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "کانون تبلیغاتی سیمای مهر البرز",
  proposalTitle: "پروپوزال همکاری تبلیغاتی",
  slogan: "تبدیل پیام به تصویر ماندگار",
  introduction: "کانون تبلیغاتی سیمای مهر البرز با رویکردی حرفه‌ای و خلاقانه، در حوزه تبلیغات، برندینگ و تولید محتوای رسانه‌ای فعالیت می‌نماید. این مجموعه با بهره‌گیری از تیم متخصص و شناخت دقیق بازار، خدمات تبلیغاتی مؤثر و هدفمند را متناسب با نیاز هر کسب‌وکار ارائه می‌دهد.",
  problem: "در بازار رقابتی امروز، صرف معرفی محصولات و خدمات کافی نبوده و آنچه باعث تمایز برندها می‌شود، هویت بصری منسجم، پیام تبلیغاتی هدفمند و ارتباط مؤثر با مخاطبان است. نبود استراتژی تبلیغاتی یکپارچه، موجب کاهش اثربخشی فعالیت‌های بازاریابی خواهد شد.",
  goal: "هدف ما، معرفی توانمندی‌های کانون و ارائه راهکارهای عملی برای افزایش دیده‌شدن برند، تقویت اعتبار سازمانی و ارتقای جایگاه رقابتی مجموعه‌های همکار می‌باشد.",
  contact: {
    phone: "۰۲۶-۱۲۳۴۵۶۷۸", // Placeholder per request implies real data wasn't fully parseable or present
    email: "info@simayemehr.ir", // Placeholder
    manager: "مدیریت محترم", // Placeholder
    year: "۱۴۰۳"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "طراحی هویت بصری و برندینگ",
    icon: Palette,
    description: "ایجاد زبانی مشترک و تصویری ماندگار برای برند شما"
  },
  {
    id: 2,
    title: "تولید محتوای تبلیغاتی",
    icon: Video,
    description: "ویدیو، تیزر، موشن‌گرافیک با سناریوهای خلاقانه"
  },
  {
    id: 3,
    title: "تبلیغات محیطی و دیجیتال",
    icon: MonitorSmartphone,
    description: "کمپین‌های ۳۶۰ درجه برای پوشش حداکثری مخاطبان"
  },
  {
    id: 4,
    title: "مشاوره و استراتژی",
    icon: Lightbulb,
    description: "تدوین نقشه‌ی راه تبلیغاتی متناسب با اهداف فروش"
  }
];

export const ADVANTAGES: ValueItem[] = [
  {
    id: 1,
    text: "نگاه خلاقانه و نتیجه‌محور",
    icon: Sparkles
  },
  {
    id: 2,
    text: "تعهد به کیفیت و زمان‌بندی",
    icon: Clock
  },
  {
    id: 3,
    text: "تطابق کامل با هویت برند کارفرما",
    icon: Target
  },
  {
    id: 4,
    text: "همراهی مستمر از ایده‌پردازی تا اجرا",
    icon: Users
  }
];