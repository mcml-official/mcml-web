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
    description: `Explainable AI aims to improve the transparency of AI decisions through interpretable methods. We explore vulnerabilities in current explanation methods using adversarial attacks and develop intuitive visualizations to enhance user trust.`,
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
        description: `Safe Image Generation focuses on developing algorithms to create unbiased and ethical images. We work on automatically identifying and eliminating harmful or biased outputs to ensure responsible AI usage.`,
      },
      {
        icon: Trash2,
        title: "Machine Unlearning",
        description: `Machine Unlearning deals with the secure removal of specific data from AI models. Our research includes developing methods to comply with privacy regulations and provide transparent control of data.`,
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
        description: `Learned Image Compression utilizes AI techniques to significantly reduce the size of image data while maintaining visual quality. We focus on compression methods suitable for real-time applications and resource-limited environments.`,
      },
      {
        icon: FlaskConical,
        title: "Knowledge Distillation",
        description: `Knowledge Distillation transfers knowledge from large AI models to smaller, efficient versions. Our goal is to create lightweight models ideal for mobile and edge computing, ensuring high accuracy and robustness.`,
      },
    ],
    color: "group-hover:text-amber-600",
    bgColor: "group-hover:bg-amber-50",
    borderColor: "hover:border-amber-200",
  },
  {
    icon: Brain,
    title: "Brain-Computer Interfaces",
    description: `BCI is a powerful way to understand users' perception directly by monitoring brain activities. We have been working on investigating effective BCI techniques using EEG and fNIRS for implicit monitoring of users' perception of given multimedia content. Here, perceptual dimensions include satisfaction, quality, immersiveness, emotion, sense of reality, etc. In particular, we focus on understanding perception for novel types of media such as 3D, high dynamic range (HDR), 4K UHD, etc. Furthermore, peripheral physiological signals such as skin temperature, skin conductance, and heart rate are also considered, which have potential to complement brain activities.`,
    color: "group-hover:text-purple-600",
    bgColor: "group-hover:bg-purple-50",
    borderColor: "hover:border-purple-200",
  },
  {
    icon: Camera,
    title: "Dynamic Vision Sensors",
    description: `Dynamic Vision Sensors detect rapid visual changes through event-based imaging. We research algorithms for efficient interpretation of DVS data, applicable to robotics, autonomous driving, and real-time monitoring due to their speed and efficiency.`,
    color: "group-hover:text-cyan-600",
    bgColor: "group-hover:bg-cyan-50",
    borderColor: "hover:border-cyan-200",
  },
  {
    icon: Globe,
    title: "Multimodal Deep Learning",
    description: `Often, heterogeneous sensors are simultaneously involved, which produce multimodal data. For instance, human actions can be recorded by cameras, depth cameras, accelerometers, and gyroscopes at the same time. They are mutually complementary, thus learning from them is beneficial to maximize performance. We have recently developed a deep learning architecture that can integrate multimodal data. It is not only effective in terms of performance but also robust against partial absence of data and modalities.`,
    color: "group-hover:text-pink-600",
    bgColor: "group-hover:bg-pink-50",
    borderColor: "hover:border-pink-200",
  },
];
