export type Member = {
  name: string;
  role: string;
  image: string;
  interests: string[];
  email: string;
  website?: string;
};

export type AlumniMember = Pick<Member, "name" | "role" | "website">;

export const members: Member[] = [
  {
    name: "Gihyun Kim",
    role: "Ph.D. Student",
    image: "/members/gihyun_kim.jpeg",
    interests: ["Deep Learning with Computer Vision", "Adversarial Attack"],
    email: "kkh9314@yonsei.ac.kr",
  },
  {
    name: "Juyeop Kim",
    role: "Ph.D. Student",
    image: "/members/juyeop_kim.jpg",
    interests: ["Explainable AI"],
    email: "juyeopkim@yonsei.ac.kr",
  },
  {
    name: "Junha Park",
    role: "Ph.D. Student",
    image: "/members/junha_park.jpg",
    interests: ["Deep Learning for Graph Data", "Generative Models"],
    email: "junha.park@yonsei.ac.kr",
  },
  {
    name: "Seungeun Yu",
    role: "Ph.D. Student",
    image: "/members/seungeun-yu.jpeg",
    interests: ["Computer Vision"],
    email: "seungeun.yu@yonsei.ac.kr",
  },
  {
    name: "Hyeonjin Lee",
    role: "Ph.D. Student",
    image: "/members/hyeonjin_lee.jpg",
    interests: ["Human-Like Machine Learning"],
    email: "hyeonjin.lee@yonsei.ac.kr",
  },
  {
    name: "Donghee Shin",
    role: "Ph.D. Student",
    image: "/members/donghee_shin.jpeg",
    interests: ["Generative Model", "Graph Neural Network"],
    email: "dh.shin@yonsei.ac.kr",
  },
  {
    name: "Chae-Won Lee",
    role: "Ph.D. Student",
    image: "/members/chae-won_lee.jpeg",
    interests: ["Brain-Computer Interface"],
    email: "chae-won.lee@yonsei.ac.kr",
  },
  {
    name: "Ian Ryu",
    role: "Ph.D. Student",
    image: "/members/ian_ryu.jpeg",
    interests: ["Generative Models"],
    email: "ianryu@yonsei.ac.kr",
  },
  {
    name: "Jiyoon Kim",
    role: "M.S. Student",
    image: "/members/jiyoon_kim.jpeg",
    interests: ["Generative Models"],
    email: "jiyoon.kim@yonsei.ac.kr",
  },
  {
    name: "Jiyun Kong",
    role: "M.S. Student",
    image: "/members/jiyun_kong.jpeg",
    interests: ["Dynamic Vision Sensors"],
    email: "jiyun.kong@yonsei.ac.kr",
  },
  {
    name: "Jungwoo Kim",
    role: "Ph.D. Student",
    image: "/members/jungwoo_kim.jpeg",
    interests: ["Machine Learning", "Generative Models"],
    email: "kjungwoo@yonsei.ac.kr",
    website: "https://kjungwoo03.github.io",
  },
  {
    name: "Hayeon Jeong",
    role: "M.S. Student",
    image: "/members/hayeon_jeong.jpeg",
    interests: ["Diffusion Models"],
    email: "hayeon.jeong@yonsei.ac.kr",
  },
] as const;

export const alumni: AlumniMember[] = [
  {
    name: "Jaehui Hwang",
    role: "Ph.D.",
    website: "https://j-h-hwang.github.io/",
  },
  { name: "Hyungkeun Park", role: "M.S." },
  { name: "Jin-Woo Park", role: "M.S." },
  { name: "Junhyuk Park", role: "M.S." },
  { name: "Hojung Lee", role: "Ph.D." },
  { name: "Jin Lee", role: "M.S." },
  { name: "Hyeongnam Jang", role: "Ph.D." },
  { name: "Junghyuk Lee", role: "Ph.D." },
  { name: "Seohyun Moon", role: "M.S." },
  { name: "Geun-Woo Jeon", role: "M.S." },
  { name: "Junho Oh", role: "M.S." },
  {
    name: "Jun-Hyuk Kim",
    role: "Ph.D.",
    website: "http://junhyukk.github.io/",
  },
  { name: "Soobeom Jang", role: "Ph.D." },
  { name: "Kyulim Kim", role: "M.S." },
  {
    name: "Jun-Ho Choi",
    role: "Ph.D.",
    website: "http://idearibosome.github.io/",
  },
  { name: "Min-Su Choi", role: "M.S." },
  { name: "Seong-Eun Moon", role: "Ph.D." },
  {
    name: "Manri Cheon",
    role: "Ph.D.",
    website: "http://manricheon.github.io/",
  },
  { name: "Jooyeon Lee", role: "M.S." },
  { name: "Won-Hee Kim", role: "Postdoc" },
  { name: "Soojin Kim", role: "Ph.D." },
  { name: "Youngjae Kwon", role: "M.S." },
] as const;
