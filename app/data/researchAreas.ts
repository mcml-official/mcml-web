import {
  Search,
  Shield,
  Zap,
  Brain,
  Camera,
  Globe,
  Sparkles,
  FlaskConical,
  Trash2,
  ImageIcon,
} from "lucide-react";

export const researchAreas = [
  {
    icon: Search,
    title: "Explainable AI",
    description: `Explainable AI involves methods designed to clarify how AI systems make decisions, enhancing transparency, trust, and accountability. The area explores adversarial attacks to uncover vulnerabilities in explanations and develops visualization techniques that intuitively represent AI decision-making processes, improving interpretability and user confidence.`,
    color: "group-hover:text-blue-600",
    bgColor: "group-hover:bg-blue-50",
    borderColor: "hover:border-blue-200",
  },
  {
    icon: Shield,
    title: "Responsible AI",
    subAreas: [
      {
        icon: Sparkles,
        title: "Safe Image Generation",
        description: `Safe Image Generation includes advanced systems designed to produce ethical and unbiased AI-generated images. The research addresses biases and harmful content, developing algorithms capable of automatically detecting and preventing inappropriate visual outputs, ensuring responsible and positive societal impacts.`,
      },
      {
        icon: Trash2,
        title: "Machine Unlearning",
        description: `Machine Unlearning focuses on techniques that allow AI models to securely and effectively remove learned data or specific information upon request. This topic is crucial for enhancing user privacy, complying with data protection regulations, and enabling transparent control of personal data, thus reducing risks related to unwanted data retention.`,
      },
    ],
    color: "group-hover:text-emerald-600",
    bgColor: "group-hover:bg-emerald-50",
    borderColor: "hover:border-emerald-200",
  },
  {
    icon: Zap,
    title: "Efficient AI",
    subAreas: [
      {
        icon: ImageIcon,
        title: "Learned Image Compression",
        description: `Learned Image Compression covers AI-driven methods that significantly reduce the storage size and bandwidth needs for images without compromising visual quality. These compression methods are particularly beneficial for real-time data transmission, mobile devices, and systems operating under limited computational resources, enhancing overall efficiency.`,
      },
      {
        icon: FlaskConical,
        title: "Knowledge Distillation",
        description: `Knowledge Distillation involves transferring insights from complex, large-scale AI models to simpler, lightweight versions. This research enables the deployment of efficient, compact models in resource-constrained environments, such as mobile and edge computing, while maintaining high accuracy and robust performance.`,
      },
    ],
    color: "group-hover:text-amber-600",
    bgColor: "group-hover:bg-amber-50",
    borderColor: "hover:border-amber-200",
  },
  {
    icon: Brain,
    title: "Brain-Computer Interfaces",
    description: `Brain-Computer Interfaces (BCIs) enable direct communication between the human brain and digital devices by decoding neural signals into digital commands. Research in this area aims to assist individuals with mobility or communication impairments, improve interface reliability, and enhance the precision of neural signal interpretation for intuitive human-computer interaction.`,
    color: "group-hover:text-purple-600",
    bgColor: "group-hover:bg-purple-50",
    borderColor: "hover:border-purple-200",
  },
  {
    icon: Camera,
    title: "Dynamic Vision Sensors",
    description: `Dynamic Vision Sensors (DVS) are advanced imaging devices capturing rapid, precise changes in visual scenes through event-based detection. Research in this area focuses on developing sophisticated algorithms for interpreting and utilizing DVS data, with significant potential applications in robotics, autonomous driving, and real-time monitoring systems due to their efficiency and responsiveness.`,
    color: "group-hover:text-cyan-600",
    bgColor: "group-hover:bg-cyan-50",
    borderColor: "hover:border-cyan-200",
  },
  {
    icon: Globe,
    title: "Multimodal Deep Learning",
    description: `Multimodal Deep Learning investigates AI systems capable of integrating and simultaneously processing multiple data types, such as text, images, audio, and video. Combining diverse data sources enhances AI's comprehension, supporting context-aware and nuanced applications in various fields, including healthcare, education, entertainment, and interactive technologies.`,
    color: "group-hover:text-pink-600",
    bgColor: "group-hover:bg-pink-50",
    borderColor: "hover:border-pink-200",
  },
];
