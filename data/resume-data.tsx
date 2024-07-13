import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"

export const RESUME_DATA = {
  name: "Ana Luiza Primo",
  initials: "AP",
  location: "Minas Gerais, Brasil",
  siteURL: "https://anaprimo.com.br",
  locationLink: "https://www.google.com/maps/place/MinasGerais",
  about: "Crafting Reliability with simplicity",
  summary:
    "Site Reliability Engineer (SRE) with 8 years of experience in technology and 4 years dedicated to SRE. Passionate about building resilient and scalable systems, I seek to apply my expertise in challenging environments to drive innovation and reliability. Experienced in monitoring, automation, and incident resolution at scale, with a focus on optimizing the performance and availability of critical services. Committed to collaborating with multidisciplinary teams to achieve exceptional results and contribute to a more connected and efficient world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/61609033?v=4",
  personalWebsiteUrl: "https://anaprimo.com.br",
  twitterUsername: "@aaluizab",
  contact: {
    email: "hello@anaprimo.com.br",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aLuizab",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/analuizaprimo/",
        icon: LinkedInIcon,
      },
      {
        name: "Instargam",
        url: "https://www.instagram.com/thanluize/",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidade Federal do Pará",
      degree: "Bachelor's Degree in Telecommunications Engineering (not finished)",
      start: "2018",
      end: "2022",
    },
    {
      school: "Instituto Nacional de Telecomunicações",
      degree: "Bachelor's Degree in Industrial Engineering",
      start: "2021",
      end: "2025",
    }
  ], 
  work: [
    {
      company: "Itaú Unibanco",
      link: "https://www.itau.com.br",
      badges: [],
      title: "Site Reliability Engineer (M-level)",
      start: "2024",
      end: "Now",
      description:
        "I work on the observability team, supporting the main channels of the bank's app, which serve customers with features like login, home, and authentication. My main focus is to understand all the applications and their architectures so I can act on problems and incidents. I help the team implement alerts and dashboards to monitor and keep the app available. My mission is to make sure the customer always has the bank available in their hands." 
   },
    {
      company: "iti - Itaú's Digital Bank",
      link: "https://iti.itau/",
      badges: [],
      title: "Site Reliability Engineer (M-level)",
      start: "2021",
      end: "2024",
      description:
        "I was responsible for incident orchestration, channel support, and post-mortem ceremonies, ensuring efficient resolution and learning from incidents. I implemented SRE practices, focusing on observability to proactively monitor and optimize system health. I collaborated with the business team to drive product evolution and support the overall business objectives. I had practical experience with AWS, CI/CD, containers, Kubernetes, Git, Terraform, and Prometheus, enabling me to build and maintain robust, scalable infrastructures. I was well-versed in agile methodologies and DevOps culture, fostering collaboration and continuous improvement. My monitoring and troubleshooting expertise included Splunk, Grafana, AppDynamics, Jaeger, Loki, and Elasticsearch, allowing me to identify and resolve issues quickly. I actively organized and refined the Squad Backlog, ensuring a clear prioritization of tasks and goals. My experience with .NET Core and Kotlin microservices instrumentation enhanced observability, enabling better insights into system performance. I was passionate about creating an SLO culture to deeply understand customer experiences and continuously improve product features. I consistently eliminated toil through automation and optimization, streamlining processes and improving efficiency. I had a proven track record of supporting hundreds of microservices deployed on Kubernetes/AWS EKS, ensuring their reliability and scalability. My experience with JMeter enabled me to conduct thorough performance testing, identifying bottlenecks and optimizing system performance. Additionally, I was an On Call engineer, ready to respond to incidents and maintain system availability."
  },
  {
    company: "Stone Payments",
    link: "https://www.stone.com.br/",
    badges: [],
    title: "Site Reliability Engineer (J-level)",
    start: "2020",
    end: "2021",
    description:
      "I was a key member of an operations and infrastructure team, where I provided dedicated support for a specific set of services. My responsibilities encompassed the entire service lifecycle, from deployment and ensuring availability to monitoring performance, managing changes, and responding to emergencies. I also played a crucial role in capacity planning to meet the evolving demands of these services and other software platforms used by the team. My role involved strong collaboration with the development teams responsible for the supported services. Additionally, I liaised with other specialized infrastructure and governance teams within the company, ensuring adherence to established standards and compliance requirements for the services. My technical expertise extended to using Google Cloud, implementing infrastructure automation and infrastructure as code (IaC) practices, and setting up comprehensive monitoring systems. I embraced agile methodologies within a DevOps culture, promoting collaboration and continuous improvement. My experience encompassed working with operating systems, virtualization technologies, networks, storage solutions, and containers. I had hands-on experience with Docker and/or Kubernetes in production environments, as well as utilizing the Azure DevOps Pipelines platform for efficient software delivery. I contributed to the development of reusable modules and providers in infrastructure as code tools like Terraform and Ansible. Moreover, I possessed a strong understanding of Linux and Windows servers, coupled with proficiency in log management."
  },
  ],
  skills: [
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "GCP",
    "Grafana",
    "Loki",
    "Tempo",
    "Mimir",
    "Prometheus",
    "Splunk",
    "Jeager",
    "ArgoCD",
    "Pyhton",
    "GO",
  ],
  
  projects: [
    {
      title: "IEEE Women in Engineering",
      techStack: ["Side Project","Leadership", "Project Management"],
      description:
        "IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists and inspiring girls around the world to follow their academic interests to a career in engineering.",
      link: {
        label: "@ieeeufpa",
        href: "https://www.instagram.com/ieeewieufpa/",
      },
    },
    {
      title: "Iaçá Robotic Group",
      techStack: ["Side Project", "C", "Arduino"],
      description: "A robotic competition group",
      link: {
        label: "@iacaufpa",
        href: "https://www.instagram.com/iacaufpa/",
      },
    },
    {
      title: "WIE Code Python",
      techStack: ["Side Project", "Python"],
      description:
        "A github account to teach python to students during the pandemics. We created PDF materials and challanges weekly and posted on Instagram.",
      link: {
        label: "wiecodepython",
        href: "https://github.com/wiecodepython",
      },
    },

  ],
} as const
