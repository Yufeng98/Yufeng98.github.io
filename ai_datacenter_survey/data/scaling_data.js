window.SCALING_DATA = {
 "generated": "2026-09-13",
 "metrics": [
  {
   "key": "params_b",
   "label": "Model size",
   "unit": "B params",
   "color": "#e41a1c",
   "symbol": "circle",
   "baseline": 0.117
  },
  {
   "key": "bf16_tflops",
   "label": "Dense FP16/BF16 compute",
   "unit": "TFLOPS",
   "color": "#1f5bd8",
   "symbol": "rect",
   "baseline": 46
  },
  {
   "key": "hbm_tbps",
   "label": "DRAM bandwidth",
   "unit": "TB/s",
   "color": "#138a19",
   "symbol": "diamond",
   "baseline": 0.6
  },
  {
   "key": "hbm_gb",
   "label": "DRAM capacity",
   "unit": "GB",
   "color": "#8b1a9b",
   "symbol": "plus",
   "baseline": 16
  },
  {
   "key": "scaleup_gbps",
   "label": "Scale-up interconnect BW",
   "unit": "GB/s",
   "color": "#f59d00",
   "symbol": "triangle",
   "baseline": 300
  }
 ],
 "baseline_note": "Every series is normalized to the first observation of the survey's Figure 2 (GPT for model size; TPU v2 for compute, DRAM bandwidth and capacity; NVLink 2 for scale-up interconnect). Points tagged \"survey-figure\" keep the figure's dates; other points use the month of first public introduction or disclosure.",
 "vendors": [
  "AMD",
  "AWS",
  "Alibaba (T-Head)",
  "Cambricon",
  "Enflame",
  "Esperanto Technologies",
  "FuriosaAI",
  "Google",
  "Graphcore",
  "Groq",
  "Huawei",
  "IBM",
  "Iluvatar CoreX",
  "Intel (Habana)",
  "Kunlunxin",
  "Meta",
  "MetaX",
  "Microsoft",
  "Moore Threads",
  "NVIDIA",
  "NextSilicon",
  "Preferred Networks",
  "Qualcomm",
  "Rebellions",
  "SambaNova",
  "Stream Computing",
  "Tenstorrent",
  "Tesla",
  "VastaiTech",
  "Xiwang (曦望)",
  "d-Matrix"
 ],
 "datasets": [
  "survey-figure",
  "survey-table",
  "chip-corpus"
 ],
 "statuses": [
  "released",
  "preliminary",
  "forthcoming"
 ],
 "sources": [
  {
   "n": 1,
   "id": "openai_gpt",
   "org": "OpenAI",
   "title": "Improving Language Understanding by Generative Pre-Training",
   "venue": "",
   "year": 2018,
   "url": "https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf",
   "note": ""
  },
  {
   "n": 2,
   "id": "bert",
   "org": "Devlin et al.",
   "title": "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
   "venue": "arXiv 1810.04805",
   "year": 2018,
   "url": "https://arxiv.org/abs/1810.04805",
   "note": ""
  },
  {
   "n": 3,
   "id": "gpt2",
   "org": "OpenAI",
   "title": "Language Models are Unsupervised Multitask Learners",
   "venue": "",
   "year": 2019,
   "url": "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",
   "note": ""
  },
  {
   "n": 4,
   "id": "vit",
   "org": "Dosovitskiy et al.",
   "title": "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
   "venue": "arXiv 2010.11929",
   "year": 2020,
   "url": "https://arxiv.org/abs/2010.11929",
   "note": ""
  },
  {
   "n": 5,
   "id": "bloom",
   "org": "BigScience",
   "title": "BLOOM: A 176B-Parameter Open-Access Multilingual Language Model",
   "venue": "arXiv 2211.05100",
   "year": 2022,
   "url": "https://arxiv.org/abs/2211.05100",
   "note": ""
  },
  {
   "n": 6,
   "id": "llama",
   "org": "Meta AI",
   "title": "LLaMA: Open and Efficient Foundation Language Models",
   "venue": "arXiv 2302.13971",
   "year": 2023,
   "url": "https://arxiv.org/abs/2302.13971",
   "note": ""
  },
  {
   "n": 7,
   "id": "llama2",
   "org": "Meta AI",
   "title": "Llama 2: Open Foundation and Fine-Tuned Chat Models",
   "venue": "arXiv 2307.09288",
   "year": 2023,
   "url": "https://arxiv.org/abs/2307.09288",
   "note": ""
  },
  {
   "n": 8,
   "id": "grok1",
   "org": "xAI",
   "title": "Open Release of Grok-1",
   "venue": "",
   "year": 2024,
   "url": "https://x.ai/news/grok-os",
   "note": ""
  },
  {
   "n": 9,
   "id": "mixtral_8x22b",
   "org": "Mistral AI",
   "title": "Mixtral 8x22B model documentation",
   "venue": "",
   "year": 2024,
   "url": "https://docs.mistral.ai/models/mixtral-8x22b-0-1-0-3",
   "note": ""
  },
  {
   "n": 10,
   "id": "deepseek_v2",
   "org": "DeepSeek-AI",
   "title": "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model",
   "venue": "arXiv 2405.04434",
   "year": 2024,
   "url": "https://arxiv.org/abs/2405.04434",
   "note": ""
  },
  {
   "n": 11,
   "id": "nemotron4",
   "org": "NVIDIA",
   "title": "Nemotron-4 340B Technical Report",
   "venue": "",
   "year": 2024,
   "url": "https://research.nvidia.com/publication/2024-06_nemotron-4-340b",
   "note": ""
  },
  {
   "n": 12,
   "id": "llama3",
   "org": "Meta AI",
   "title": "The Llama 3 Herd of Models",
   "venue": "",
   "year": 2024,
   "url": "https://ai.meta.com/research/publications/the-llama-3-herd-of-models/",
   "note": ""
  },
  {
   "n": 13,
   "id": "grok2",
   "org": "xAI",
   "title": "grok-2 checkpoint configuration (config.json)",
   "venue": "",
   "year": 2025,
   "url": "https://huggingface.co/xai-org/grok-2/blob/main/config.json",
   "note": "Total parameter count derived from the released checkpoint configuration; the August 2024 beta announcement (https://x.ai/news/grok-2) does not state it."
  },
  {
   "n": 14,
   "id": "deepseek_v3",
   "org": "DeepSeek-AI",
   "title": "DeepSeek-V3 Technical Report",
   "venue": "arXiv 2412.19437",
   "year": 2024,
   "url": "https://arxiv.org/abs/2412.19437",
   "note": ""
  },
  {
   "n": 15,
   "id": "qwen3",
   "org": "Alibaba Qwen",
   "title": "Qwen3-235B-A22B model card",
   "venue": "",
   "year": 2025,
   "url": "https://huggingface.co/Qwen/Qwen3-235B-A22B",
   "note": ""
  },
  {
   "n": 16,
   "id": "llama4",
   "org": "Meta AI",
   "title": "The Llama 4 herd: The beginning of a new era of natively multimodal AI innovation",
   "venue": "",
   "year": 2025,
   "url": "https://ai.meta.com/blog/llama-4-multimodal-intelligence/",
   "note": ""
  },
  {
   "n": 17,
   "id": "pangu_ultra",
   "org": "Huawei",
   "title": "Pangu Ultra MoE: How to Train Your Big MoE on Ascend NPUs",
   "venue": "arXiv 2505.04519",
   "year": 2025,
   "url": "https://arxiv.org/abs/2505.04519",
   "note": ""
  },
  {
   "n": 18,
   "id": "kimi_k2",
   "org": "Moonshot AI",
   "title": "Kimi-K2-Instruct model card",
   "venue": "",
   "year": 2025,
   "url": "https://huggingface.co/moonshotai/Kimi-K2-Instruct",
   "note": ""
  },
  {
   "n": 19,
   "id": "deepseek_v4",
   "org": "DeepSeek-AI",
   "title": "DeepSeek V4 Preview Release",
   "venue": "",
   "year": 2026,
   "url": "https://api-docs.deepseek.com/news/news260424/",
   "note": ""
  },
  {
   "n": 20,
   "id": "kimi_k3",
   "org": "Moonshot AI",
   "title": "Kimi K3: Open Frontier Intelligence",
   "venue": "",
   "year": 2026,
   "url": "https://www.kimi.com/en/blog/kimi-k3",
   "note": ""
  },
  {
   "n": 21,
   "id": "nvidia_p100_micro",
   "org": "Foley and Danskin",
   "title": "Ultra-Performance Pascal GPU and NVLink Interconnect",
   "venue": "IEEE Micro 37(2)",
   "year": 2017,
   "url": "https://doi.org/10.1109/MM.2017.37",
   "note": ""
  },
  {
   "n": 22,
   "id": "nvidia_v100_micro",
   "org": "Choquette, Giroux and Foley",
   "title": "Volta: Performance and Programmability",
   "venue": "IEEE Micro 38(2)",
   "year": 2018,
   "url": "https://doi.org/10.1109/MM.2018.022071134",
   "note": ""
  },
  {
   "n": 23,
   "id": "nvidia_a100_80gb_datasheet",
   "org": "NVIDIA",
   "title": "NVIDIA A100 80GB Tensor Core GPU datasheet",
   "venue": "",
   "year": 2020,
   "url": "https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/a100/pdf/a100-80gb-datasheet-update-a4-nvidia-1485612-r12-web.pdf",
   "note": ""
  },
  {
   "n": 24,
   "id": "nvidia_a100_micro",
   "org": "Choquette et al.",
   "title": "NVIDIA A100 Tensor Core GPU: Performance and Innovation",
   "venue": "IEEE Micro 41(2)",
   "year": 2021,
   "url": "https://doi.org/10.1109/MM.2021.3061394",
   "note": ""
  },
  {
   "n": 25,
   "id": "nvidia_h100_micro",
   "org": "Choquette",
   "title": "NVIDIA Hopper H100 GPU: Scaling Performance",
   "venue": "IEEE Micro 43(3)",
   "year": 2023,
   "url": "https://doi.org/10.1109/MM.2023.3256796",
   "note": ""
  },
  {
   "n": 26,
   "id": "nvidia_blackwell_overview",
   "org": "NVIDIA",
   "title": "NVIDIA Blackwell Architecture Technical Overview",
   "venue": "",
   "year": 2024,
   "url": "https://resources.nvidia.com/en-us-blackwell-architecture",
   "note": ""
  },
  {
   "n": 27,
   "id": "nvidia_b300_datasheet",
   "org": "NVIDIA",
   "title": "NVIDIA Blackwell Ultra datasheet",
   "venue": "",
   "year": 2025,
   "url": "https://resources.nvidia.com/en-us-blackwell-architecture/blackwell-ultra-datasheet?ncid=no-ncid",
   "note": ""
  },
  {
   "n": 28,
   "id": "nvidia_blackwell_ultra_blog",
   "org": "Aubrey and Stam (NVIDIA)",
   "title": "Inside NVIDIA Blackwell Ultra: The Chip Powering the AI Factory Era",
   "venue": "",
   "year": 2025,
   "url": "https://developer.nvidia.com/blog/inside-nvidia-blackwell-ultra-the-chip-powering-the-ai-factory-era/",
   "note": ""
  },
  {
   "n": 29,
   "id": "nvidia_rubin_nvl72",
   "org": "NVIDIA",
   "title": "NVIDIA Vera Rubin NVL72 specifications",
   "venue": "",
   "year": 2026,
   "url": "https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/",
   "note": "Per-GPU Rubin figures are marked preliminary and subject to change by NVIDIA."
  },
  {
   "n": 30,
   "id": "amd_mi50_ornl",
   "org": "AMD",
   "title": "AMD GPU Hardware Basics (ORNL Application Readiness Workshop)",
   "venue": "",
   "year": 2019,
   "url": "https://www.olcf.ornl.gov/wp-content/uploads/2019/10/ORNL_Application_Readiness_Workshop-AMD_GPU_Basics.pdf",
   "note": ""
  },
  {
   "n": 31,
   "id": "amd_cdna_whitepaper",
   "org": "AMD",
   "title": "Introducing AMD CDNA Architecture (white paper)",
   "venue": "",
   "year": 2020,
   "url": "https://www.amd.com/content/dam/amd/en/documents/instinct-business-docs/white-papers/amd-cdna-white-paper.pdf",
   "note": ""
  },
  {
   "n": 32,
   "id": "amd_cdna2_whitepaper",
   "org": "AMD",
   "title": "Introducing AMD CDNA 2 Architecture (white paper)",
   "venue": "",
   "year": 2021,
   "url": "https://www.amd.com/content/dam/amd/en/documents/instinct-business-docs/white-papers/amd-cdna2-white-paper.pdf",
   "note": ""
  },
  {
   "n": 33,
   "id": "amd_cdna3_whitepaper",
   "org": "AMD",
   "title": "Introducing AMD CDNA 3 Architecture (white paper)",
   "venue": "",
   "year": 2023,
   "url": "https://www.amd.com/content/dam/amd/en/documents/instinct-tech-docs/white-papers/amd-cdna-3-white-paper.pdf",
   "note": ""
  },
  {
   "n": 34,
   "id": "amd_cdna4_whitepaper",
   "org": "AMD",
   "title": "Introducing AMD CDNA 4 Architecture (white paper)",
   "venue": "",
   "year": 2025,
   "url": "https://www.amd.com/content/dam/amd/en/documents/instinct-tech-docs/white-papers/amd-cdna-4-architecture-whitepaper.pdf",
   "note": ""
  },
  {
   "n": 35,
   "id": "amd_mi455x_page",
   "org": "AMD",
   "title": "AMD Instinct MI455X GPUs",
   "venue": "",
   "year": 2026,
   "url": "https://www.amd.com/en/products/accelerators/instinct/mi400/mi455x.html",
   "note": ""
  },
  {
   "n": 36,
   "id": "amd_cdna5_page",
   "org": "AMD",
   "title": "AMD CDNA 5 Architecture",
   "venue": "",
   "year": 2026,
   "url": "https://www.amd.com/en/technologies/cdna.html",
   "note": ""
  },
  {
   "n": 37,
   "id": "google_tpu_v2_v3_cacm",
   "org": "Jouppi et al.",
   "title": "A Domain-Specific Supercomputer for Training Deep Neural Networks",
   "venue": "Communications of the ACM 63(7)",
   "year": 2020,
   "url": "https://doi.org/10.1145/3360307",
   "note": ""
  },
  {
   "n": 38,
   "id": "google_tpu_v3_docs",
   "org": "Google Cloud",
   "title": "TPU v3",
   "venue": "",
   "year": 2026,
   "url": "https://docs.cloud.google.com/tpu/docs/v3",
   "note": ""
  },
  {
   "n": 39,
   "id": "google_tpu_v4_isca",
   "org": "Jouppi et al.",
   "title": "TPU v4: An Optically Reconfigurable Supercomputer for Machine Learning with Hardware Support for Embeddings",
   "venue": "ISCA 2023",
   "year": 2023,
   "url": "https://doi.org/10.1145/3579371.3589350",
   "note": ""
  },
  {
   "n": 40,
   "id": "google_tpu_v5e_docs",
   "org": "Google Cloud",
   "title": "TPU v5e",
   "venue": "",
   "year": 2026,
   "url": "https://docs.cloud.google.com/tpu/docs/v5e",
   "note": ""
  },
  {
   "n": 41,
   "id": "google_tpu_v5p_docs",
   "org": "Google Cloud",
   "title": "TPU v5p",
   "venue": "",
   "year": 2026,
   "url": "https://docs.cloud.google.com/tpu/docs/v5p",
   "note": ""
  },
  {
   "n": 42,
   "id": "google_tpu_v6e_docs",
   "org": "Google Cloud",
   "title": "TPU v6e",
   "venue": "",
   "year": 2026,
   "url": "https://docs.cloud.google.com/tpu/docs/v6e",
   "note": ""
  },
  {
   "n": 43,
   "id": "google_tpu_v7_docs",
   "org": "Google Cloud",
   "title": "TPU7x (Ironwood)",
   "venue": "",
   "year": 2026,
   "url": "https://docs.cloud.google.com/tpu/docs/tpu7x",
   "note": ""
  },
  {
   "n": 44,
   "id": "google_tpu_v8_blog",
   "org": "Google Cloud",
   "title": "Inside the eighth-generation TPU: An architecture deep dive",
   "venue": "",
   "year": 2026,
   "url": "https://cloud.google.com/blog/products/compute/tpu-8t-and-tpu-8i-technical-deep-dive",
   "note": ""
  },
  {
   "n": 45,
   "id": "aws_inferentia_arch",
   "org": "AWS",
   "title": "Inferentia Architecture (AWS Neuron documentation)",
   "venue": "",
   "year": 2026,
   "url": "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.31.1/about-neuron/arch/neuron-hardware/inferentia.html",
   "note": ""
  },
  {
   "n": 46,
   "id": "aws_inf1_arch",
   "org": "AWS",
   "title": "Amazon EC2 Inf1 Architecture (AWS Neuron documentation)",
   "venue": "",
   "year": 2026,
   "url": "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.31.1/about-neuron/arch/neuron-hardware/inf1-arch.html",
   "note": ""
  },
  {
   "n": 47,
   "id": "aws_trainium_arch",
   "org": "AWS",
   "title": "Trainium Architecture (AWS Neuron documentation)",
   "venue": "",
   "year": 2026,
   "url": "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.31.1/about-neuron/arch/neuron-hardware/trainium.html",
   "note": ""
  },
  {
   "n": 48,
   "id": "aws_trn1_arch",
   "org": "AWS",
   "title": "Amazon EC2 Trn1 Architecture (AWS Neuron documentation)",
   "venue": "",
   "year": 2026,
   "url": "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.31.1/about-neuron/arch/neuron-hardware/trn1-arch.html",
   "note": ""
  },
  {
   "n": 49,
   "id": "aws_inferentia2_arch",
   "org": "AWS",
   "title": "Inferentia2 Architecture (AWS Neuron documentation)",
   "venue": "",
   "year": 2026,
   "url": "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.31.1/about-neuron/arch/neuron-hardware/inferentia2.html",
   "note": ""
  },
  {
   "n": 50,
   "id": "aws_inf2_arch",
   "org": "AWS",
   "title": "Amazon EC2 Inf2 Architecture (AWS Neuron documentation)",
   "venue": "",
   "year": 2026,
   "url": "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.31.1/about-neuron/arch/neuron-hardware/inf2-arch.html",
   "note": ""
  },
  {
   "n": 51,
   "id": "aws_trainium2_arch",
   "org": "AWS",
   "title": "Trainium2 Architecture (AWS Neuron documentation)",
   "venue": "",
   "year": 2026,
   "url": "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.31.1/about-neuron/arch/neuron-hardware/trainium2.html",
   "note": ""
  },
  {
   "n": 52,
   "id": "aws_trn2_arch",
   "org": "AWS",
   "title": "Amazon EC2 Trn2 Architecture (AWS Neuron documentation)",
   "venue": "",
   "year": 2026,
   "url": "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.31.1/about-neuron/arch/neuron-hardware/trn2-arch.html",
   "note": ""
  },
  {
   "n": 53,
   "id": "aws_trainium3_arch",
   "org": "AWS",
   "title": "Trainium3 Architecture (AWS Neuron documentation)",
   "venue": "",
   "year": 2026,
   "url": "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.31.1/about-neuron/arch/neuron-hardware/trainium3.html",
   "note": ""
  },
  {
   "n": 54,
   "id": "aws_trn3_arch",
   "org": "AWS",
   "title": "Amazon EC2 Trn3 Architecture (AWS Neuron documentation)",
   "venue": "",
   "year": 2026,
   "url": "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.31.1/about-neuron/arch/neuron-hardware/trn3-arch.html",
   "note": ""
  },
  {
   "n": 55,
   "id": "meta_mtia_v1_blog",
   "org": "Meta",
   "title": "MTIA v1: Meta's first-generation AI inference accelerator",
   "venue": "",
   "year": 2023,
   "url": "https://ai.meta.com/blog/meta-training-inference-accelerator-AI-MTIA/",
   "note": ""
  },
  {
   "n": 56,
   "id": "meta_mtia_v2_blog",
   "org": "Meta",
   "title": "Our next-generation Meta Training and Inference Accelerator",
   "venue": "",
   "year": 2024,
   "url": "https://ai.meta.com/blog/next-generation-meta-training-inference-accelerator-AI-MTIA/",
   "note": ""
  },
  {
   "n": 57,
   "id": "meta_mtia_isca2025",
   "org": "Meta",
   "title": "Meta's Second Generation AI Chip: Model-Chip Co-Design and Productionization Experiences",
   "venue": "ISCA 2025",
   "year": 2025,
   "url": "https://aisystemcodesign.github.io/papers/MTIA-ISCA25.pdf",
   "note": ""
  },
  {
   "n": 58,
   "id": "meta_mtia300_isca2026",
   "org": "Meta",
   "title": "MTIA 300: Meta's First Training Chip Featuring Built-in NICs and Collective Offloading Engines",
   "venue": "ISCA 2026 Industry Track",
   "year": 2026,
   "url": "https://aisystemcodesign.github.io/papers/MTIA300_ISCA2026.pdf",
   "note": ""
  },
  {
   "n": 59,
   "id": "meta_mtia_scale_blog_2026",
   "org": "Meta",
   "title": "Meta scales MTIA for billions (MTIA 300/400/450/500 portfolio disclosure)",
   "venue": "",
   "year": 2026,
   "url": "https://ai.meta.com/blog/meta-mtia-scale-ai-chips-for-billions/",
   "note": ""
  },
  {
   "n": 60,
   "id": "microsoft_maia100_hc2024",
   "org": "Microsoft",
   "title": "Inside Maia 100 (Hot Chips 2024 slides)",
   "venue": "Hot Chips 2024",
   "year": 2024,
   "url": "https://hc2024.hotchips.org/assets/program/conference/day2/81_HC2024.Microsoft.Xu.Ramakrishnan.final.v2.pdf",
   "note": ""
  },
  {
   "n": 61,
   "id": "microsoft_maia100_techcommunity",
   "org": "Microsoft",
   "title": "Inside Maia 100: Revolutionizing AI workloads with Microsoft's custom AI accelerator",
   "venue": "",
   "year": 2024,
   "url": "https://techcommunity.microsoft.com/blog/azureinfrastructureblog/inside-maia-100-revolutionizing-ai-workloads-with-microsofts-custom-ai-accelerat/4229118",
   "note": ""
  },
  {
   "n": 62,
   "id": "microsoft_maia200_blog",
   "org": "Microsoft",
   "title": "Maia 200: the AI accelerator built for inference",
   "venue": "",
   "year": 2026,
   "url": "https://blogs.microsoft.com/blog/2026/01/26/maia-200-the-ai-accelerator-built-for-inference/",
   "note": ""
  },
  {
   "n": 63,
   "id": "microsoft_maia200_deep_dive",
   "org": "Microsoft",
   "title": "Deep dive into the Maia 200 architecture",
   "venue": "",
   "year": 2026,
   "url": "https://techcommunity.microsoft.com/blog/azureinfrastructureblog/deep-dive-into-the-maia-200-architecture/4489312",
   "note": ""
  },
  {
   "n": 64,
   "id": "tesla_dojo_hc34",
   "org": "Tesla",
   "title": "Tesla Dojo D1 microarchitecture (Hot Chips 34 slides)",
   "venue": "Hot Chips 34",
   "year": 2022,
   "url": "https://hc34.hotchips.org/assets/program/conference/day2/Machine%20Learning/HotChips_tesla_dojo_uarch.pdf",
   "note": ""
  },
  {
   "n": 65,
   "id": "qualcomm_cloud_ai_sdk_architecture",
   "org": "Qualcomm",
   "title": "Qualcomm Cloud AI SDK documentation: Cloud AI 100 architecture",
   "venue": "",
   "year": 2026,
   "url": "https://quic.github.io/cloud-ai-sdk-pages/latest/Getting-Started/Architecture/",
   "note": ""
  },
  {
   "n": 66,
   "id": "qualcomm_cloud_ai_100_2019_pr",
   "org": "Qualcomm",
   "title": "Qualcomm brings power-efficient AI inference to the datacenter",
   "venue": "",
   "year": 2019,
   "url": "https://www.qualcomm.com/news/releases/2019/04/qualcomm-brings-power-efficient-artificial-intelligence-inference",
   "note": ""
  },
  {
   "n": 67,
   "id": "qualcomm_cloud_ai_100_ultra_brief",
   "org": "Qualcomm",
   "title": "Qualcomm Cloud AI 100 Ultra product brief",
   "venue": "",
   "year": 2023,
   "url": "https://www.qualcomm.com/content/dam/qcomm-martech/dm-assets/documents/Prod-Brief-QCOM-Cloud-AI-100-Ultra.pdf",
   "note": ""
  },
  {
   "n": 68,
   "id": "qualcomm_cloud_ai_100_ultra_page",
   "org": "Qualcomm",
   "title": "Qualcomm Cloud AI 100 Ultra product page",
   "venue": "",
   "year": 2023,
   "url": "https://www.qualcomm.com/artificial-intelligence/data-center/cloud-ai-100-ultra",
   "note": ""
  },
  {
   "n": 69,
   "id": "qualcomm_cloud_ai_100_ultra_intro",
   "org": "Qualcomm",
   "title": "Introducing Qualcomm Cloud AI 100 Ultra",
   "venue": "",
   "year": 2023,
   "url": "https://www.qualcomm.com/news/onq/2023/11/introducing-qualcomm-cloud-ai-100-ultra",
   "note": ""
  },
  {
   "n": 70,
   "id": "dmatrix_product_page",
   "org": "d-Matrix",
   "title": "d-Matrix Corsair product page",
   "venue": "",
   "year": 2025,
   "url": "https://www.d-matrix.ai/product/",
   "note": ""
  },
  {
   "n": 71,
   "id": "dmatrix_corsair_announcement",
   "org": "d-Matrix",
   "title": "d-Matrix unveils Corsair, the world's most efficient AI computing platform for inference in datacenters",
   "venue": "",
   "year": 2024,
   "url": "https://www.d-matrix.ai/announcements/d-matrix-unveils-corsair-the-worlds-most-efficient-ai-computing-platform-for-inference-in-datacenters/",
   "note": ""
  },
  {
   "n": 72,
   "id": "dmatrix_raptor_isca2026",
   "org": "d-Matrix",
   "title": "Early Silicon of Raptor: The First 3D-DRAM Accelerator for Generative Inference",
   "venue": "ISCA 2026",
   "year": 2026,
   "url": "https://ramyadhadidi.github.io/files/dMatrix-Raptor-ISCA.pdf",
   "note": ""
  },
  {
   "n": 73,
   "id": "groq_hc34",
   "org": "Groq",
   "title": "Groq Tensor Streaming Processor (Hot Chips 34 slides, Abts)",
   "venue": "Hot Chips 34",
   "year": 2022,
   "url": "https://hc34.hotchips.org/assets/program/conference/day2/Machine%20Learning/HotChips34%20-%20Groq%20-%20Abts%20-%20final.pdf",
   "note": ""
  },
  {
   "n": 74,
   "id": "groq_lpu_architecture",
   "org": "Groq",
   "title": "Groq LPU architecture page",
   "venue": "",
   "year": 2024,
   "url": "https://groq.com/lpu-architecture",
   "note": ""
  },
  {
   "n": 75,
   "id": "graphcore_gc200_intro",
   "org": "Graphcore",
   "title": "Introducing second-generation IPU systems for AI at scale",
   "venue": "",
   "year": 2020,
   "url": "https://www.graphcore.ai/posts/introducing-second-generation-ipu-systems-for-ai-at-scale",
   "note": ""
  },
  {
   "n": 76,
   "id": "graphcore_hc33",
   "org": "Graphcore",
   "title": "Colossus Mk2 IPU (Hot Chips 33 slides, Simon Knowles)",
   "venue": "Hot Chips 33",
   "year": 2021,
   "url": "https://hc33.hotchips.org/assets/program/conference/day2/HC2021.Graphcore.SimonKnowles.v04.pdf",
   "note": ""
  },
  {
   "n": 77,
   "id": "graphcore_bow_page",
   "org": "Graphcore",
   "title": "Bow IPU processors",
   "venue": "",
   "year": 2022,
   "url": "https://www.graphcore.ai/bow-processors",
   "note": ""
  },
  {
   "n": 78,
   "id": "graphcore_bow_intro",
   "org": "Graphcore",
   "title": "The WoW factor: Graphcore systems get huge power and efficiency boost",
   "venue": "",
   "year": 2022,
   "url": "https://www.graphcore.ai/posts/the-wow-factor-graphcore-systems-get-huge-power-and-efficiency-boost",
   "note": ""
  },
  {
   "n": 79,
   "id": "tenstorrent_wormhole_specs",
   "org": "Tenstorrent",
   "title": "Wormhole Specifications (docs.tenstorrent.com AI boards)",
   "venue": "",
   "year": 2026,
   "url": "https://docs.tenstorrent.com/aibs/wormhole/specifications.html",
   "note": ""
  },
  {
   "n": 80,
   "id": "tenstorrent_wormhole_isscc2022",
   "org": "Tenstorrent",
   "title": "Tenstorrent ISSCC 2022 hardware paper, session 21.4",
   "venue": "ISSCC 2022",
   "year": 2022,
   "url": "https://doi.org/10.1109/ISSCC42614.2022.9731633",
   "note": ""
  },
  {
   "n": 81,
   "id": "tenstorrent_blackhole_specs",
   "org": "Tenstorrent",
   "title": "Blackhole Specifications (docs.tenstorrent.com AI boards)",
   "venue": "",
   "year": 2026,
   "url": "https://docs.tenstorrent.com/aibs/blackhole/specifications.html",
   "note": ""
  },
  {
   "n": 82,
   "id": "tenstorrent_blackhole_product",
   "org": "Tenstorrent",
   "title": "Blackhole product page (p100a / p150a / p150b SKUs)",
   "venue": "",
   "year": 2026,
   "url": "https://tenstorrent.com/en/hardware/blackhole",
   "note": ""
  },
  {
   "n": 83,
   "id": "tenstorrent_blackhole_hotchips2024",
   "org": "Tenstorrent",
   "title": "Blackhole & TT-Metalium at Hot Chips 2024",
   "venue": "Hot Chips 2024",
   "year": 2024,
   "url": "https://hc2024.hotchips.org/assets/program/conference/day1/88_HC2024.Tenstorrent.Jasmina.Davor.v7.pdf",
   "note": ""
  },
  {
   "n": 84,
   "id": "sambanova_sn40l_arxiv",
   "org": "SambaNova Systems",
   "title": "SambaNova SN40L: Scaling the AI Memory Wall with Dataflow and Composition of Experts",
   "venue": "",
   "year": 2024,
   "url": "https://arxiv.org/html/2405.07518v1",
   "note": ""
  },
  {
   "n": 85,
   "id": "sambanova_sn40l_announcement",
   "org": "SambaNova Systems",
   "title": "SambaNova SN40L introduction",
   "venue": "",
   "year": 2023,
   "url": "https://www.businesswire.com/news/home/20230919534495/en/",
   "note": ""
  },
  {
   "n": 86,
   "id": "rebellions_atom_whitepaper",
   "org": "Rebellions",
   "title": "ATOM White Paper",
   "venue": "",
   "year": 2024,
   "url": "https://rebellions.ai/wp-content/uploads/2024/07/ATOMgenAI_white-paper.pdf",
   "note": ""
  },
  {
   "n": 87,
   "id": "rebellions_atom_architecture",
   "org": "Rebellions",
   "title": "ATOM Architecture: Finding the Sweet Spot for GenAI",
   "venue": "",
   "year": 2024,
   "url": "https://rebellions.ai/atom-architecture-finding-the-sweet-spot-for-genai/",
   "note": ""
  },
  {
   "n": 88,
   "id": "rebellions_rebel_quad_hc2025",
   "org": "Rebellions",
   "title": "Rebellions debuts REBEL-Quad at Hot Chips 2025",
   "venue": "Hot Chips 2025",
   "year": 2025,
   "url": "https://rebellions.ai/newsroom/rebellions-debuts-rebel-quad-at-hot-chips-2025-breaking-ais-energy-tax-with-high-performance-chiplet-innovation/",
   "note": ""
  },
  {
   "n": 89,
   "id": "furiosa_warboy_specs",
   "org": "FuriosaAI",
   "title": "Warboy specifications",
   "venue": "",
   "year": 2026,
   "url": "https://furiosa.ai/warboy/specs",
   "note": ""
  },
  {
   "n": 90,
   "id": "furiosa_rngd_product",
   "org": "FuriosaAI",
   "title": "RNGD product page",
   "venue": "",
   "year": 2026,
   "url": "https://furiosa.ai/rngd",
   "note": ""
  },
  {
   "n": 91,
   "id": "furiosa_rngd_hotchips2024",
   "org": "Chips and Cheese",
   "title": "FuriosaAI's RNGD at Hot Chips 2024",
   "venue": "Hot Chips 2024",
   "year": 2024,
   "url": "https://chipsandcheese.com/p/furiosaais-rngd-at-hot-chips-2024-accelerating-ai-with-a-more-flexible-primitive",
   "note": ""
  },
  {
   "n": 92,
   "id": "esperanto_hotchips33",
   "org": "Esperanto Technologies",
   "title": "ET-SoC-1 at Hot Chips 33",
   "venue": "Hot Chips 33",
   "year": 2021,
   "url": "https://hc33.hotchips.org/assets/program/conference/day2/HC2021.Esperanto.Dave_Ditzel.presentation.v1submitted.pdf",
   "note": ""
  },
  {
   "n": 93,
   "id": "esperanto_ieee_micro",
   "org": "Esperanto Technologies",
   "title": "ET-SoC-1: a 1000+ RISC-V core AI inference chip (IEEE Micro)",
   "venue": "IEEE Micro",
   "year": 2022,
   "url": "https://www.esperanto.ai/wp-content/uploads/2022/05/Dave-IEEE-Micro.pdf",
   "note": ""
  },
  {
   "n": 94,
   "id": "nextplatform_maverick2",
   "org": "The Next Platform",
   "title": "NextSilicon takes aim at CPUs and GPUs with Maverick-2 dataflow engine (reproduces the vendor peak-performance spec table)",
   "venue": "",
   "year": 2025,
   "url": "https://www.nextplatform.com/compute/2025/10/22/nextsilicon-takes-aim-at-cpus-and-gpus-with-maverick-2-dataflow-engine/1639749",
   "note": ""
  },
  {
   "n": 95,
   "id": "nextsilicon_maverick_product",
   "org": "NextSilicon",
   "title": "Maverick-2 product page",
   "venue": "",
   "year": 2026,
   "url": "https://www.nextsilicon.com/maverick",
   "note": ""
  },
  {
   "n": 96,
   "id": "nextsilicon_maverick_launch",
   "org": "NextSilicon",
   "title": "NextSilicon launches Maverick-2 (launch press release)",
   "venue": "",
   "year": 2025,
   "url": "https://www.businesswire.com/news/home/20251022712360/en/",
   "note": ""
  },
  {
   "n": 97,
   "id": "ibm_spyre_newsroom",
   "org": "IBM",
   "title": "IBM introduces the Spyre Accelerator for commercial availability",
   "venue": "",
   "year": 2025,
   "url": "https://newsroom.ibm.com/2025-10-07-ibm-introduces-the-spyre-accelerator-for-commercial-availability",
   "note": ""
  },
  {
   "n": 98,
   "id": "ibm_spyre_research_blog",
   "org": "IBM Research",
   "title": "Lifting the cover on the IBM Spyre Accelerator",
   "venue": "",
   "year": 2025,
   "url": "https://research.ibm.com/blog/lifting-the-cover-on-the-ibm-spyre-accelerator",
   "note": ""
  },
  {
   "n": 99,
   "id": "pfn_mncore2_whitepaper",
   "org": "Preferred Networks",
   "title": "MN-Core 2 White Paper",
   "venue": "",
   "year": 2023,
   "url": "https://projects.preferred.jp/mn-core/assets/MN-Core_2_whitepaper_en.pdf",
   "note": ""
  },
  {
   "n": 100,
   "id": "pfn_mncore2_catalog",
   "org": "Preferred Networks",
   "title": "MN-Core 2 hardware catalog",
   "venue": "",
   "year": 2024,
   "url": "https://projects.preferred.jp/mn-core/assets/MN-Core2-hardware-catalog.pdf",
   "note": ""
  },
  {
   "n": 101,
   "id": "nvidia_h200_product_page",
   "org": "NVIDIA",
   "title": "NVIDIA H200 Tensor Core GPU (product page)",
   "venue": "",
   "year": 2023,
   "url": "https://www.nvidia.com/en-us/data-center/h200/",
   "note": ""
  },
  {
   "n": 102,
   "id": "nvidia_h200_press_release",
   "org": "NVIDIA",
   "title": "NVIDIA Supercharges Hopper, the World's Leading AI Computing Platform",
   "venue": "",
   "year": 2023,
   "url": "https://nvidianews.nvidia.com/news/nvidia-supercharges-hopper-the-worlds-leading-ai-computing-platform",
   "note": ""
  },
  {
   "n": 103,
   "id": "amd_mi300a_product_page",
   "org": "AMD",
   "title": "AMD Instinct MI300A APU (product page)",
   "venue": "",
   "year": 2023,
   "url": "https://www.amd.com/en/products/accelerators/instinct/mi300/mi300a.html",
   "note": ""
  },
  {
   "n": 104,
   "id": "amd_mi300_press_release",
   "org": "AMD",
   "title": "AMD Delivers Leadership Portfolio of Data Center AI Solutions with AMD Instinct MI300 Series",
   "venue": "",
   "year": 2023,
   "url": "https://ir.amd.com/news-events/press-releases/detail/1173/amd-delivers-leadership-portfolio-of-data-center-ai-solutions-with-amd-instinct-mi300-series",
   "note": ""
  },
  {
   "n": 105,
   "id": "amd_mi325x_press_release",
   "org": "AMD",
   "title": "AMD Delivers Leadership AI Performance with AMD Instinct MI325X Accelerators",
   "venue": "",
   "year": 2024,
   "url": "https://ir.amd.com/news-events/press-releases/detail/1220/amd-delivers-leadership-ai-performance-with-amd-instinct-mi325x-accelerators",
   "note": ""
  },
  {
   "n": 106,
   "id": "amd_aai2026_press_release",
   "org": "AMD",
   "title": "AAI 2026: AMD Delivers Full-Stack Compute for the Agentic AI Era",
   "venue": "",
   "year": 2026,
   "url": "https://ir.amd.com/news-events/press-releases/detail/1294/aai-2026-amd-delivers-full-stack-compute-for-the-agentic-ai-era",
   "note": ""
  },
  {
   "n": 107,
   "id": "amd_cdna5_blog",
   "org": "AMD",
   "title": "Introducing AMD CDNA 5 and the AMD Helios Rackscale Solution",
   "venue": "AMD ROCm Blogs",
   "year": 2026,
   "url": "https://rocm.blogs.amd.com/ecosystems-and-partners/cdna5-helios/README.html",
   "note": ""
  },
  {
   "n": 108,
   "id": "huawei_cloudplus_hc2018",
   "org": "Huawei",
   "title": "Huawei CloudPlus cover story on the Huawei Connect 2018 AI chip introduction",
   "venue": "",
   "year": 2019,
   "url": "https://www.huaweicloud.com/content/dam/cloudbu-site/archive/hk/en-us/cloudplus/thirdphase/Cloud_thirdphrase_EN.pdf",
   "note": ""
  },
  {
   "n": 109,
   "id": "huawei_davinci_cmc_2020",
   "org": "Huawei",
   "title": "DaVinci: A Scalable Architecture for Neural Network Computing (Zhan Xu, CMC)",
   "venue": "",
   "year": 2020,
   "url": "https://www.cmc.ca/wp-content/uploads/2020/03/Zhan-Xu-Huawei.pdf",
   "note": ""
  },
  {
   "n": 110,
   "id": "sth_ascend_910",
   "org": "ServeTheHome",
   "title": "Huawei Ascend 910 Provides a NVIDIA AI Training Alternative",
   "venue": "",
   "year": 2019,
   "url": "https://www.servethehome.com/huawei-ascend-910-provides-a-nvidia-ai-training-alternative/",
   "note": ""
  },
  {
   "n": 111,
   "id": "tomshardware_ascend_910b",
   "org": "Tom's Hardware",
   "title": "Huawei's homegrown AI chip examined: SMIC-produced Ascend 910B vs TSMC-produced Ascend 910",
   "venue": "",
   "year": 2024,
   "url": "https://www.tomshardware.com/tech-industry/artificial-intelligence/huaweis-homegrown-ai-chip-examined-chinese-fab-smic-produced-ascend-910b-is-massively-different-from-the-tsmc-produced-ascend-910",
   "note": ""
  },
  {
   "n": 112,
   "id": "huawei_ascend_950_keynote",
   "org": "Huawei",
   "title": "Eric Xu keynote: Ascend 950 hardware architecture (Huawei Connect 2025)",
   "venue": "",
   "year": 2025,
   "url": "https://www.huawei.com/en/news/2025/9/hc-xu-keynote-speech",
   "note": ""
  },
  {
   "n": 113,
   "id": "semianalysis_cloudmatrix384",
   "org": "SemiAnalysis",
   "title": "Huawei AI CloudMatrix 384: China's answer to NVIDIA GB200 NVL72",
   "venue": "",
   "year": 2025,
   "url": "https://newsletter.semianalysis.com/p/huawei-ai-cloudmatrix-384-chinas-answer-to-nvidia-gb200-nvl72",
   "note": ""
  },
  {
   "n": 114,
   "id": "trendforce_ascend_950",
   "org": "TrendForce",
   "title": "Huawei unveils Ascend 950 with in-house HBM in 2026, touts SuperPoD to rival NVIDIA",
   "venue": "",
   "year": 2025,
   "url": "https://www.trendforce.com/news/2025/09/18/news-huawei-unveils-ascend-950-with-in-house-hbm-in-2026-touts-superpod-to-rival-nvidia/",
   "note": ""
  },
  {
   "n": 115,
   "id": "habana_gaudi_press_2019",
   "org": "Habana Labs",
   "title": "Habana Labs announces Gaudi AI training processor (company press release)",
   "venue": "",
   "year": 2019,
   "url": "https://www.prnewswire.com/news-releases/habana-labs-announces-gaudi-ai-training-processor-300869169.html",
   "note": ""
  },
  {
   "n": 116,
   "id": "intel_gaudi2_fact_sheet",
   "org": "Intel",
   "title": "Intel Vision 2022 Habana Gaudi2 launch fact sheet",
   "venue": "",
   "year": 2022,
   "url": "https://download.intel.com/newsroom/2022/corporate/vision/Habana-Gaudi2-Launch-Fact-Sheet.pdf",
   "note": ""
  },
  {
   "n": 117,
   "id": "intel_gaudi3_whitepaper",
   "org": "Intel",
   "title": "Intel Gaudi 3 AI Accelerator White Paper",
   "venue": "",
   "year": 2024,
   "url": "https://cdrdv2-public.intel.com/817486/gaudi-3-ai-accelerator-white-paper.pdf",
   "note": ""
  },
  {
   "n": 118,
   "id": "intel_gaudi3_vision_2024",
   "org": "Intel",
   "title": "Intel Vision 2024: Gaudi 3 AI accelerator",
   "venue": "",
   "year": 2024,
   "url": "https://www.intel.com/content/www/us/en/newsroom/news/vision-2024-gaudi-3-ai-accelerator.html",
   "note": ""
  },
  {
   "n": 119,
   "id": "cambricon_sse_disclosure_2022",
   "org": "Cambricon",
   "title": "Cambricon issuer disclosure to Shanghai Stock Exchange (2022-12-20)",
   "venue": "",
   "year": 2022,
   "url": "https://static.sse.com.cn/stock/disclosure/announcement/c/202212/688256_20221220_VKXT.pdf",
   "note": ""
  },
  {
   "n": 120,
   "id": "cambricon_mlu370_m8_manual_fcc",
   "org": "Cambricon",
   "title": "MLU370-M8 Product Manual (FCC filing 2ARVF-MLU370-M8)",
   "venue": "",
   "year": 2022,
   "url": "https://fcc.report/FCC-ID/2ARVF-MLU370-M8/5528126.pdf",
   "note": ""
  },
  {
   "n": 121,
   "id": "wikichip_cambricon_mlu",
   "org": "WikiChip",
   "title": "Machine Learning Unit (MLU) - Cambricon",
   "venue": "",
   "year": 2021,
   "url": "https://en.wikichip.org/wiki/cambricon/mlu",
   "note": ""
  },
  {
   "n": 122,
   "id": "baidu_kunlun_hc32_slides",
   "org": "Baidu",
   "title": "Baidu Kunlun: Hot Chips 32 (2020) slide deck",
   "venue": "",
   "year": 2020,
   "url": "https://hc32.hotchips.org/assets/program/conference/day2/HotChips2020_ML_Inference_Baidu_Kunlun_v5.pdf",
   "note": ""
  },
  {
   "n": 123,
   "id": "ieee_kunlun_hc2020",
   "org": "Baidu",
   "title": "Kunlun: A 14nm High-Performance AI Processor for Diversified Workloads (Hot Chips 2020, IEEE)",
   "venue": "Hot Chips 32",
   "year": 2020,
   "url": "https://ieeexplore.ieee.org/document/9366056",
   "note": ""
  },
  {
   "n": 124,
   "id": "kunlunxin_gen2_product_page",
   "org": "Kunlunxin",
   "title": "Kunlunxin 2nd-generation AI chip product page (昆仑芯2代)",
   "venue": "",
   "year": 2021,
   "url": "https://www.kunlunxin.com/product/2873.html",
   "note": ""
  },
  {
   "n": 125,
   "id": "tomshardware_kunlun2",
   "org": "Tom's Hardware",
   "title": "Baidu unveils Kunlun II processor for AI",
   "venue": "",
   "year": 2021,
   "url": "https://www.tomshardware.com/news/baidu-unveils-kunlun-ii-processor-for-ai",
   "note": ""
  },
  {
   "n": 126,
   "id": "csdn_kunlunxin_p800",
   "org": "CSDN",
   "title": "昆仑芯P800前世今生 (P800 specification compilation)",
   "venue": "",
   "year": 2025,
   "url": "https://blog.csdn.net/Rong_Toa/article/details/151322568",
   "note": ""
  },
  {
   "n": 127,
   "id": "sina_kunlunxin_p800_cluster",
   "org": "新浪科技 (Sina Tech)",
   "title": "昆仑芯3代P800万卡点亮",
   "venue": "",
   "year": 2025,
   "url": "https://finance.sina.com.cn/tech/roll/2025-02-05/doc-ineimcyh2167561.shtml",
   "note": ""
  },
  {
   "n": 128,
   "id": "technode_zhenwu_810e",
   "org": "TechNode",
   "title": "Alibaba's T-Head unveils self-developed AI chip Zhenwu 810E",
   "venue": "",
   "year": 2026,
   "url": "https://technode.com/2026/01/30/alibabas-t-head-unveils-self-developed-ai-chip-zhenwu-810e/",
   "note": ""
  },
  {
   "n": 129,
   "id": "trendforce_zhenwu_810e",
   "org": "TrendForce",
   "title": "Alibaba T-Head unveils new AI chip said to match NVIDIA H20",
   "venue": "",
   "year": 2026,
   "url": "https://www.trendforce.com/news/2026/01/29/news-alibaba-t-head-unveils-new-ai-chip-said-to-match-nvidia-h20-as-ipo-speculation-builds/",
   "note": ""
  },
  {
   "n": 130,
   "id": "alibaba_newsroom_m890",
   "org": "Alibaba Group",
   "title": "Alibaba Group newsroom: Zhenwu M890, Panjiu AL128 and ICN Switch 1.0 (2026-05-20)",
   "venue": "",
   "year": 2026,
   "url": "https://www.alibabagroup.com/en-US/document-1994119844504535040",
   "note": ""
  },
  {
   "n": 131,
   "id": "alibabacloud_blog_m890",
   "org": "Alibaba Cloud",
   "title": "Alibaba unveils new AI chip, flagship model and rebuilt cloud stack for the agentic era",
   "venue": "",
   "year": 2026,
   "url": "https://www.alibabacloud.com/blog/alibaba-unveils-new-ai-chip-flagship-model-and-rebuilt-cloud-stack-ai-for-agentic-era_603151",
   "note": ""
  },
  {
   "n": 132,
   "id": "gf_enflame_dtu1_press",
   "org": "GlobalFoundries",
   "title": "Enflame Technology announces CloudBlazer DTU chip on GlobalFoundries 12LP FinFET",
   "venue": "",
   "year": 2019,
   "url": "https://gf.com/gf-press-release/enflame-technology-announces-cloudblazer-dtu-chip-globalfoundries-12lp-finfet/",
   "note": ""
  },
  {
   "n": 133,
   "id": "enflame_t10_product_manual",
   "org": "Enflame",
   "title": "CloudBlazer T10 Product Manual",
   "venue": "",
   "year": 2020,
   "url": "https://support.enflame-tech.com/onlinedoc_hw/3-t1x/t10/product_manual/content/source/T10_product_manual.html",
   "note": ""
  },
  {
   "n": 134,
   "id": "enflame_t20_product_manual",
   "org": "Enflame",
   "title": "CloudBlazer T20 Product Manual",
   "venue": "",
   "year": 2021,
   "url": "https://support.enflame-tech.com/onlinedoc_hw/1-t2x/t20/product_manual/content/source/T20_product_manual.html",
   "note": ""
  },
  {
   "n": 135,
   "id": "zhidx_dtu2_t20",
   "org": "智东西 (zhidx)",
   "title": "邃思2.0: 中国最大AI芯片 (DTU 2.0 / T20 specifications)",
   "venue": "",
   "year": 2021,
   "url": "https://zhidx.com/p/281331.html",
   "note": ""
  },
  {
   "n": 136,
   "id": "mthreads_s4000_page",
   "org": "Moore Threads",
   "title": "MTT S4000 official product page",
   "venue": "",
   "year": 2024,
   "url": "https://en.mthreads.com/product/S4000",
   "note": ""
  },
  {
   "n": 137,
   "id": "videocardz_mtt_s4000",
   "org": "VideoCardz",
   "title": "Moore Threads introduces MTT S4000 48GB AI GPU with MTLink",
   "venue": "",
   "year": 2023,
   "url": "https://videocardz.com/newz/moore-threads-introduces-mtt-s4000-48gb-ai-gpu-with-mtlink-and-zero-cost-nvidia-cuda-framework-translation",
   "note": ""
  },
  {
   "n": 138,
   "id": "tomshardware_metax_n100",
   "org": "Tom's Hardware",
   "title": "MetaX, Chinese GPU developer, unveils first product (Xisi N100)",
   "venue": "",
   "year": 2023,
   "url": "https://www.tomshardware.com/news/metax-chinese-gpu-developer-unveils-first-product",
   "note": ""
  },
  {
   "n": 139,
   "id": "wccftech_metax_n100",
   "org": "WCCFTech",
   "title": "Chinese chipmaker MetaX unveils first GPU targeted towards AI, features 160 TOPS of compute",
   "venue": "",
   "year": 2023,
   "url": "https://wccftech.com/chinese-chipmaker-metax-unveils-first-gpu-targeted-towards-ai-features-160-tops-of-compute/",
   "note": ""
  },
  {
   "n": 140,
   "id": "ithome_metax_c600",
   "org": "IT之家 (ITHome)",
   "title": "沐曦曦云 C600: 首款全国产 GPU",
   "venue": "",
   "year": 2025,
   "url": "https://www.ithome.com/0/890/942.htm",
   "note": ""
  },
  {
   "n": 141,
   "id": "eastmoney_metax_c600",
   "org": "EastMoney",
   "title": "MetaX C600 对标 Hopper FP8",
   "venue": "",
   "year": 2025,
   "url": "https://caifuhao.eastmoney.com/news/20250824025550377224840",
   "note": ""
  },
  {
   "n": 142,
   "id": "iluvatar_site",
   "org": "Iluvatar CoreX",
   "title": "Iluvatar CoreX official site (product navigation: 天垓300 / 天垓150 / 天垓100)",
   "venue": "",
   "year": 2026,
   "url": "https://www.iluvatar.com/",
   "note": ""
  },
  {
   "n": 143,
   "id": "wikipedia_iluvatar",
   "org": "Wikipedia",
   "title": "Iluvatar CoreX",
   "venue": "",
   "year": 2026,
   "url": "https://en.wikipedia.org/wiki/Iluvatar_CoreX",
   "note": ""
  },
  {
   "n": 144,
   "id": "csdn_tiangai150",
   "org": "CSDN",
   "title": "TianGai-150 (BI-V150) specifications overview",
   "venue": "",
   "year": 2024,
   "url": "https://blog.csdn.net/2402_84466582/article/details/139412485",
   "note": ""
  },
  {
   "n": 145,
   "id": "sunrise_s2_product_page",
   "org": "Xiwang (曦望)",
   "title": "曦望 S2 product page",
   "venue": "",
   "year": 2026,
   "url": "https://sunrise-ai.com/products/s2-product",
   "note": ""
  },
  {
   "n": 146,
   "id": "sina_xiwang_s2_reveal",
   "org": "新浪财经 (Sina Finance)",
   "title": "新国产GPU曦望 (S2 reveal coverage, 2025-07-01)",
   "venue": "",
   "year": 2025,
   "url": "https://finance.sina.com.cn/tech/roll/2025-07-01/doc-infcxsmt5575943.shtml",
   "note": ""
  },
  {
   "n": 147,
   "id": "vastaitech_va1_page",
   "org": "VastaiTech",
   "title": "载天 VA1 product page",
   "venue": "",
   "year": 2021,
   "url": "https://www.vastaitech.com/product/general/va1",
   "note": ""
  },
  {
   "n": 148,
   "id": "qq_vastai_va1_launch",
   "org": "腾讯新闻 (Tencent News)",
   "title": "VastaiTech SV100 + 载天 VA1 launch (2021-07-08)",
   "venue": "",
   "year": 2021,
   "url": "https://news.qq.com/rain/a/20210708A032OI00",
   "note": ""
  },
  {
   "n": 149,
   "id": "qbitai_vastai_waic2023",
   "org": "量子位 (QbitAI)",
   "title": "VastaiTech at WAIC 2023: SG100, 南禺 VG-series, 载天 VA1L, VA12",
   "venue": "",
   "year": 2023,
   "url": "https://www.qbitai.com/2023/07/66614.html",
   "note": ""
  },
  {
   "n": 150,
   "id": "36kr_vastai_waic2023",
   "org": "36Kr",
   "title": "VastaiTech WAIC 2023 launch coverage (VA1L, VA12)",
   "venue": "",
   "year": 2023,
   "url": "https://www.36kr.com/p/2332635957528066",
   "note": ""
  },
  {
   "n": 151,
   "id": "vastai_vllm_recipe_qwen3",
   "org": "VastaiTech",
   "title": "vLLM x VastAI recipe: Qwen3-32B (VA16 128G = 4x32G)",
   "venue": "",
   "year": 2026,
   "url": "https://vllm-vacc.vastaitech.com/Qwen/Qwen3-32B",
   "note": ""
  },
  {
   "n": 152,
   "id": "sina_vastai_va16",
   "org": "上海证券报 via Sina Finance",
   "title": "VastaiTech 载天 VA16: 128 GB, FP4 + FP8 (2026-04-27)",
   "venue": "",
   "year": 2026,
   "url": "https://finance.sina.com.cn/roll/2026-04-27/doc-inhvxtrc2314774.shtml",
   "note": ""
  },
  {
   "n": 153,
   "id": "ttyinfo_va16_certification",
   "org": "通泰易",
   "title": "TG657V2 / TG658V3 / TG659V2 servers certified with VastaiTech VA16 (2025-06-13)",
   "venue": "",
   "year": 2025,
   "url": "http://ttyinfo.com/News/info/id/154.html",
   "note": ""
  },
  {
   "n": 154,
   "id": "stc_stcp920_manual",
   "org": "Stream Computing",
   "title": "STCP920 product manual, rev 1.12.1",
   "venue": "",
   "year": 2024,
   "url": "https://docs.streamcomputing.com/AI加速卡/硬件产品手册/STCP920产品手册",
   "note": ""
  },
  {
   "n": 155,
   "id": "carrv21_neuralscale",
   "org": "Stream Computing",
   "title": "NeuralScale: A RISC-V Based Neural Processor Boosting AI Inference in Clouds",
   "venue": "CARRV 2021",
   "year": 2021,
   "url": "https://carrv.github.io/2021/papers/CARRV2021_paper_67_Zhan.pdf",
   "note": ""
  }
 ],
 "products": {
  "gpt": {
   "id": "gpt",
   "name": "GPT",
   "vendor": "OpenAI",
   "kind": "model",
   "date": "2018-06-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 0.117,
     "unit": "B params",
     "refs": [
      1
     ],
     "note": ""
    }
   }
  },
  "bert": {
   "id": "bert",
   "name": "BERT",
   "vendor": "Google",
   "kind": "model",
   "date": "2018-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 0.34,
     "unit": "B params",
     "refs": [
      2
     ],
     "note": ""
    }
   }
  },
  "gpt2": {
   "id": "gpt2",
   "name": "GPT-2",
   "vendor": "OpenAI",
   "kind": "model",
   "date": "2019-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 1.5,
     "unit": "B params",
     "refs": [
      3
     ],
     "note": ""
    }
   }
  },
  "vit": {
   "id": "vit",
   "name": "ViT",
   "vendor": "Google",
   "kind": "model",
   "date": "2020-10-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 0.632,
     "unit": "B params",
     "refs": [
      4
     ],
     "note": ""
    }
   }
  },
  "bloom": {
   "id": "bloom",
   "name": "BLOOM",
   "vendor": "BigScience",
   "kind": "model",
   "date": "2022-07-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 176.0,
     "unit": "B params",
     "refs": [
      5
     ],
     "note": ""
    }
   }
  },
  "llama": {
   "id": "llama",
   "name": "Llama",
   "vendor": "Meta",
   "kind": "model",
   "date": "2023-02-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 65.0,
     "unit": "B params",
     "refs": [
      6
     ],
     "note": ""
    }
   }
  },
  "llama2": {
   "id": "llama2",
   "name": "Llama 2",
   "vendor": "Meta",
   "kind": "model",
   "date": "2023-07-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 70.0,
     "unit": "B params",
     "refs": [
      7
     ],
     "note": ""
    }
   }
  },
  "grok1": {
   "id": "grok1",
   "name": "Grok-1",
   "vendor": "xAI",
   "kind": "model",
   "date": "2024-03-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 314.0,
     "unit": "B params",
     "refs": [
      8
     ],
     "note": ""
    }
   }
  },
  "mixtral_8x22b": {
   "id": "mixtral_8x22b",
   "name": "Mixtral 8x22B",
   "vendor": "Mistral AI",
   "kind": "model",
   "date": "2024-04-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 141.0,
     "unit": "B params",
     "refs": [
      9
     ],
     "note": ""
    }
   }
  },
  "deepseek_v2": {
   "id": "deepseek_v2",
   "name": "DeepSeek-V2",
   "vendor": "DeepSeek",
   "kind": "model",
   "date": "2024-05-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 236.0,
     "unit": "B params",
     "refs": [
      10
     ],
     "note": ""
    }
   }
  },
  "nemotron4": {
   "id": "nemotron4",
   "name": "Nemotron-4",
   "vendor": "NVIDIA",
   "kind": "model",
   "date": "2024-06-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 340.0,
     "unit": "B params",
     "refs": [
      11
     ],
     "note": ""
    }
   }
  },
  "llama3": {
   "id": "llama3",
   "name": "Llama 3",
   "vendor": "Meta",
   "kind": "model",
   "date": "2024-07-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 405.0,
     "unit": "B params",
     "refs": [
      12
     ],
     "note": ""
    }
   }
  },
  "grok2": {
   "id": "grok2",
   "name": "Grok-2",
   "vendor": "xAI",
   "kind": "model",
   "date": "2024-08-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "~270B total derived from the released checkpoint configuration (h=8192, 64 layers, 8 experts); the August 2024 beta announcement does not state it.",
   "metrics": {
    "params_b": {
     "value": 270.0,
     "unit": "B params",
     "refs": [
      13
     ],
     "note": "~270B total derived from the released checkpoint configuration (h=8192, 64 layers, 8 experts); the August 2024 beta announcement does not state it."
    }
   }
  },
  "deepseek_v3": {
   "id": "deepseek_v3",
   "name": "DeepSeek-V3",
   "vendor": "DeepSeek",
   "kind": "model",
   "date": "2024-12-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 671.0,
     "unit": "B params",
     "refs": [
      14
     ],
     "note": ""
    }
   }
  },
  "qwen3": {
   "id": "qwen3",
   "name": "Qwen3",
   "vendor": "Alibaba",
   "kind": "model",
   "date": "2025-04-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 235.0,
     "unit": "B params",
     "refs": [
      15
     ],
     "note": ""
    }
   }
  },
  "llama4": {
   "id": "llama4",
   "name": "Llama 4",
   "vendor": "Meta",
   "kind": "model",
   "date": "2025-04-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "Llama 4 Behemoth, ~2T total parameters",
   "metrics": {
    "params_b": {
     "value": 2000.0,
     "unit": "B params",
     "refs": [
      16
     ],
     "note": "Llama 4 Behemoth, ~2T total parameters"
    }
   }
  },
  "pangu_ultra": {
   "id": "pangu_ultra",
   "name": "Pangu Ultra MoE",
   "vendor": "Huawei",
   "kind": "model",
   "date": "2025-05-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "718B total parameters disclosed in the May 2025 technical report.",
   "metrics": {
    "params_b": {
     "value": 718.0,
     "unit": "B params",
     "refs": [
      17
     ],
     "note": "718B total parameters disclosed in the May 2025 technical report."
    }
   }
  },
  "kimi_k2": {
   "id": "kimi_k2",
   "name": "Kimi K2",
   "vendor": "Moonshot AI",
   "kind": "model",
   "date": "2025-07-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 1000.0,
     "unit": "B params",
     "refs": [
      18
     ],
     "note": ""
    }
   }
  },
  "deepseek_v4": {
   "id": "deepseek_v4",
   "name": "DeepSeek-V4-Pro",
   "vendor": "DeepSeek",
   "kind": "model",
   "date": "2026-04-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 1600.0,
     "unit": "B params",
     "refs": [
      19
     ],
     "note": ""
    }
   }
  },
  "kimi_k3": {
   "id": "kimi_k3",
   "name": "Kimi K3",
   "vendor": "Moonshot AI",
   "kind": "model",
   "date": "2026-07-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "params_b": {
     "value": 2800.0,
     "unit": "B params",
     "refs": [
      20
     ],
     "note": ""
    }
   }
  },
  "nvidia_p100": {
   "id": "nvidia_p100",
   "name": "P100",
   "vendor": "NVIDIA",
   "kind": "accelerator",
   "chip_dir": "nvidia-gpu",
   "corpus": "public/chips/nvidia-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/nvidia-gpu/hw-architecture.md",
   "date": "2016-04-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-table",
   "note": "Tesla P100 SXM2. No Tensor Cores; the FP16 figure is CUDA-core throughput.",
   "metrics": {
    "bf16_tflops": {
     "value": 21.2,
     "unit": "TFLOPS",
     "refs": [
      21
     ],
     "note": "FP16 CUDA-core throughput (no Tensor Cores)",
     "label": "P100",
     "date": "2016-04-01"
    },
    "hbm_tbps": {
     "value": 0.7,
     "unit": "TB/s",
     "refs": [
      21
     ],
     "note": "",
     "label": "P100",
     "date": "2016-04-01"
    },
    "hbm_gb": {
     "value": 16.0,
     "unit": "GB",
     "refs": [
      21
     ],
     "note": "HBM2",
     "label": "P100",
     "date": "2016-04-01"
    },
    "scaleup_gbps": {
     "value": 160.0,
     "unit": "GB/s",
     "refs": [
      21
     ],
     "note": "4 NVLink 1 links, 160 GB/s aggregate bidirectional",
     "label": "NVLink 1 (P100)",
     "date": "2016-04-01"
    }
   }
  },
  "nvidia_v100": {
   "id": "nvidia_v100",
   "name": "V100",
   "vendor": "NVIDIA",
   "kind": "accelerator",
   "chip_dir": "nvidia-gpu",
   "corpus": "public/chips/nvidia-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/nvidia-gpu/hw-architecture.md",
   "date": "2017-05-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-table",
   "note": "Tesla V100 SXM2 32 GB.",
   "metrics": {
    "bf16_tflops": {
     "value": 125.0,
     "unit": "TFLOPS",
     "refs": [
      22
     ],
     "note": "FP16 Tensor Core, dense",
     "label": "V100",
     "date": "2017-05-01"
    },
    "hbm_tbps": {
     "value": 0.9,
     "unit": "TB/s",
     "refs": [
      22
     ],
     "note": "",
     "label": "V100",
     "date": "2017-05-01"
    },
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      22
     ],
     "note": "HBM2",
     "label": "V100",
     "date": "2017-05-01"
    },
    "scaleup_gbps": {
     "value": 300.0,
     "unit": "GB/s",
     "refs": [
      22
     ],
     "note": "6 NVLink 2 links, 300 GB/s aggregate bidirectional per GPU (Figure 2 date convention)",
     "label": "NVLink 2",
     "date": "2017-12-01"
    }
   }
  },
  "nvidia_a100_80gb_sxm": {
   "id": "nvidia_a100_80gb_sxm",
   "name": "A100 80GB SXM",
   "vendor": "NVIDIA",
   "kind": "accelerator",
   "chip_dir": "nvidia-gpu",
   "corpus": "public/chips/nvidia-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/nvidia-gpu/hw-architecture.md",
   "date": "2020-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "All figures refer to the 80 GB SXM configuration introduced November 2020; the A100 40 GB was announced May 2020.",
   "metrics": {
    "bf16_tflops": {
     "value": 312.0,
     "unit": "TFLOPS",
     "refs": [
      23,
      24
     ],
     "note": "dense FP16/BF16 Tensor Core; 624 is the sparse figure",
     "label": "A100 80GB SXM",
     "date": "2020-11-01"
    },
    "hbm_tbps": {
     "value": 2.039,
     "unit": "TB/s",
     "refs": [
      23,
      24
     ],
     "note": "",
     "label": "A100 80GB SXM",
     "date": "2020-11-01"
    },
    "hbm_gb": {
     "value": 80.0,
     "unit": "GB",
     "refs": [
      23,
      24
     ],
     "note": "HBM2e",
     "label": "A100 80GB SXM",
     "date": "2020-11-01"
    },
    "scaleup_gbps": {
     "value": 600.0,
     "unit": "GB/s",
     "refs": [
      23,
      24
     ],
     "note": "12 NVLink 3 links, 600 GB/s aggregate bidirectional per GPU",
     "label": "NVLink 3",
     "date": "2020-12-01"
    }
   }
  },
  "nvidia_h100": {
   "id": "nvidia_h100",
   "name": "H100",
   "vendor": "NVIDIA",
   "kind": "accelerator",
   "chip_dir": "nvidia-gpu",
   "corpus": "public/chips/nvidia-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/nvidia-gpu/hw-architecture.md",
   "date": "2022-09-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "H100 SXM5. Figure 2 uses the September 2022 availability month; Hopper was announced March 2022.",
   "metrics": {
    "bf16_tflops": {
     "value": 989.0,
     "unit": "TFLOPS",
     "refs": [
      25
     ],
     "note": "dense FP16/BF16 Tensor Core; 1979 sparse",
     "label": "H100",
     "date": "2022-09-01"
    },
    "hbm_tbps": {
     "value": 3.35,
     "unit": "TB/s",
     "refs": [
      25
     ],
     "note": "",
     "label": "H100",
     "date": "2022-09-01"
    },
    "hbm_gb": {
     "value": 80.0,
     "unit": "GB",
     "refs": [
      25
     ],
     "note": "HBM3",
     "label": "H100",
     "date": "2022-09-01"
    },
    "scaleup_gbps": {
     "value": 900.0,
     "unit": "GB/s",
     "refs": [
      25
     ],
     "note": "18 NVLink 4 links, 900 GB/s aggregate bidirectional per GPU",
     "label": "NVLink 4",
     "date": "2022-12-01"
    }
   }
  },
  "nvidia_b200": {
   "id": "nvidia_b200",
   "name": "B200",
   "vendor": "NVIDIA",
   "kind": "accelerator",
   "chip_dir": "nvidia-gpu",
   "corpus": "public/chips/nvidia-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/nvidia-gpu/hw-architecture.md",
   "date": "2024-12-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "Figure 2 uses the December 2024 availability month; Blackwell was announced March 2024.",
   "metrics": {
    "bf16_tflops": {
     "value": 2250.0,
     "unit": "TFLOPS",
     "refs": [
      26
     ],
     "note": "dense FP16/BF16 Tensor Core; 4.5 PFLOPS sparse",
     "label": "B200",
     "date": "2024-12-01"
    },
    "hbm_tbps": {
     "value": 8.0,
     "unit": "TB/s",
     "refs": [
      26
     ],
     "note": "",
     "label": "B200",
     "date": "2024-12-01"
    },
    "hbm_gb": {
     "value": 192.0,
     "unit": "GB",
     "refs": [
      26
     ],
     "note": "HBM3e",
     "label": "B200",
     "date": "2024-12-01"
    },
    "scaleup_gbps": {
     "value": 1800.0,
     "unit": "GB/s",
     "refs": [
      26
     ],
     "note": "18 NVLink 5 links, 1.8 TB/s aggregate bidirectional per GPU",
     "label": "NVLink 5",
     "date": "2024-12-01"
    }
   }
  },
  "nvidia_b300": {
   "id": "nvidia_b300",
   "name": "B300",
   "vendor": "NVIDIA",
   "kind": "accelerator",
   "chip_dir": "nvidia-gpu",
   "corpus": "public/chips/nvidia-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/nvidia-gpu/hw-architecture.md",
   "date": "2025-03-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-table",
   "note": "Blackwell Ultra.",
   "metrics": {
    "bf16_tflops": {
     "value": 2560.0,
     "unit": "TFLOPS",
     "refs": [
      27,
      28
     ],
     "note": "dense FP16/BF16 Tensor Core as listed in the survey's Table (Section 5)",
     "label": "B300",
     "date": "2025-03-01"
    },
    "hbm_tbps": {
     "value": 8.0,
     "unit": "TB/s",
     "refs": [
      27,
      28
     ],
     "note": "",
     "label": "B300",
     "date": "2025-03-01"
    },
    "hbm_gb": {
     "value": 288.0,
     "unit": "GB",
     "refs": [
      27,
      28
     ],
     "note": "HBM3e",
     "label": "B300",
     "date": "2025-03-01"
    },
    "scaleup_gbps": {
     "value": 1800.0,
     "unit": "GB/s",
     "refs": [
      27,
      28
     ],
     "note": "NVLink 5, 1.8 TB/s aggregate bidirectional per GPU",
     "label": "B300",
     "date": "2025-03-01"
    }
   }
  },
  "nvidia_rubin": {
   "id": "nvidia_rubin",
   "name": "Rubin GPU",
   "vendor": "NVIDIA",
   "kind": "accelerator",
   "chip_dir": "nvidia-gpu",
   "corpus": "public/chips/nvidia-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/nvidia-gpu/hw-architecture.md",
   "date": "2026-01-01",
   "date_precision": "month",
   "status": "preliminary",
   "dataset": "survey-figure",
   "note": "Vera Rubin NVL72 per-GPU figures; NVIDIA marks them preliminary and subject to change.",
   "metrics": {
    "bf16_tflops": {
     "value": 4000.0,
     "unit": "TFLOPS",
     "refs": [
      29
     ],
     "note": "dense FP16/BF16, preliminary",
     "label": "Rubin GPU",
     "date": "2026-01-01"
    },
    "hbm_tbps": {
     "value": 22.0,
     "unit": "TB/s",
     "refs": [
      29
     ],
     "note": "",
     "label": "Rubin GPU",
     "date": "2026-01-01"
    },
    "hbm_gb": {
     "value": 288.0,
     "unit": "GB",
     "refs": [
      29
     ],
     "note": "HBM4",
     "label": "Rubin GPU",
     "date": "2026-01-01"
    },
    "scaleup_gbps": {
     "value": 3600.0,
     "unit": "GB/s",
     "refs": [
      29
     ],
     "note": "NVLink 6, 3.6 TB/s aggregate bidirectional per GPU, preliminary",
     "label": "NVLink 6",
     "date": "2026-01-01"
    }
   }
  },
  "amd_mi50": {
   "id": "amd_mi50",
   "name": "MI50",
   "vendor": "AMD",
   "kind": "accelerator",
   "chip_dir": "amd-gpu",
   "corpus": "public/chips/amd-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/amd-gpu/hw-architecture.md",
   "date": "2018-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-table",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 26.5,
     "unit": "TFLOPS",
     "refs": [
      30
     ],
     "note": "FP16 packed-math (Vega 20), dense",
     "label": "MI50",
     "date": "2018-11-01"
    },
    "hbm_tbps": {
     "value": 1.0,
     "unit": "TB/s",
     "refs": [
      30
     ],
     "note": "",
     "label": "MI50",
     "date": "2018-11-01"
    },
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      30
     ],
     "note": "HBM2",
     "label": "MI50",
     "date": "2018-11-01"
    },
    "scaleup_gbps": {
     "value": 200.0,
     "unit": "GB/s",
     "refs": [
      30
     ],
     "note": "Infinity Fabric links, ring topology; aggregate bidirectional per GPU",
     "label": "MI50",
     "date": "2018-11-01"
    }
   }
  },
  "amd_mi100": {
   "id": "amd_mi100",
   "name": "MI100",
   "vendor": "AMD",
   "kind": "accelerator",
   "chip_dir": "amd-gpu",
   "corpus": "public/chips/amd-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/amd-gpu/hw-architecture.md",
   "date": "2020-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 184.6,
     "unit": "TFLOPS",
     "refs": [
      31
     ],
     "note": "dense FP16 Matrix Core (BF16 is 92.3 TFLOPS on CDNA 1)",
     "label": "MI100",
     "date": "2020-11-01"
    },
    "hbm_tbps": {
     "value": 1.23,
     "unit": "TB/s",
     "refs": [
      31
     ],
     "note": "",
     "label": "MI100",
     "date": "2020-11-01"
    },
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      31
     ],
     "note": "HBM2",
     "label": "MI100",
     "date": "2020-11-01"
    },
    "scaleup_gbps": {
     "value": 276.0,
     "unit": "GB/s",
     "refs": [
      31
     ],
     "note": "3 Infinity Fabric links, aggregate bidirectional per GPU",
     "label": "MI100",
     "date": "2020-11-01"
    }
   }
  },
  "amd_mi250x": {
   "id": "amd_mi250x",
   "name": "MI250X",
   "vendor": "AMD",
   "kind": "accelerator",
   "chip_dir": "amd-gpu",
   "corpus": "public/chips/amd-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/amd-gpu/hw-architecture.md",
   "date": "2021-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "Both GCDs of the MI250X package.",
   "metrics": {
    "bf16_tflops": {
     "value": 383.0,
     "unit": "TFLOPS",
     "refs": [
      32
     ],
     "note": "dense FP16/BF16 Matrix Core, whole package",
     "label": "MI250X",
     "date": "2021-11-01"
    },
    "hbm_tbps": {
     "value": 3.277,
     "unit": "TB/s",
     "refs": [
      32
     ],
     "note": "",
     "label": "MI250X",
     "date": "2021-11-01"
    },
    "hbm_gb": {
     "value": 128.0,
     "unit": "GB",
     "refs": [
      32
     ],
     "note": "HBM2e",
     "label": "MI250X",
     "date": "2021-11-01"
    },
    "scaleup_gbps": {
     "value": 800.0,
     "unit": "GB/s",
     "refs": [
      32
     ],
     "note": "8 Infinity Fabric links, aggregate bidirectional per package",
     "label": "MI250X",
     "date": "2021-11-01"
    }
   }
  },
  "amd_mi300x": {
   "id": "amd_mi300x",
   "name": "MI300X",
   "vendor": "AMD",
   "kind": "accelerator",
   "chip_dir": "amd-gpu",
   "corpus": "public/chips/amd-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/amd-gpu/hw-architecture.md",
   "date": "2023-12-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 1307.0,
     "unit": "TFLOPS",
     "refs": [
      33
     ],
     "note": "dense FP16/BF16 Matrix Core; 2615 with structured sparsity",
     "label": "MI300X",
     "date": "2023-12-01"
    },
    "hbm_tbps": {
     "value": 5.325,
     "unit": "TB/s",
     "refs": [
      33
     ],
     "note": "",
     "label": "MI300X",
     "date": "2023-12-01"
    },
    "hbm_gb": {
     "value": 192.0,
     "unit": "GB",
     "refs": [
      33
     ],
     "note": "HBM3",
     "label": "MI300X",
     "date": "2023-12-01"
    },
    "scaleup_gbps": {
     "value": 896.0,
     "unit": "GB/s",
     "refs": [
      33
     ],
     "note": "7 Infinity Fabric (XGMI) links x 128 GB/s, aggregate bidirectional per GPU",
     "label": "MI300X",
     "date": "2023-12-01"
    }
   }
  },
  "amd_mi355x": {
   "id": "amd_mi355x",
   "name": "MI355X",
   "vendor": "AMD",
   "kind": "accelerator",
   "chip_dir": "amd-gpu",
   "corpus": "public/chips/amd-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/amd-gpu/hw-architecture.md",
   "date": "2025-06-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 2560.0,
     "unit": "TFLOPS",
     "refs": [
      34
     ],
     "note": "dense FP16/BF16 Matrix Core",
     "label": "MI355X",
     "date": "2025-06-01"
    },
    "hbm_tbps": {
     "value": 8.0,
     "unit": "TB/s",
     "refs": [
      34
     ],
     "note": "",
     "label": "MI355X",
     "date": "2025-06-01"
    },
    "hbm_gb": {
     "value": 288.0,
     "unit": "GB",
     "refs": [
      34
     ],
     "note": "HBM3e",
     "label": "MI355X",
     "date": "2025-06-01"
    },
    "scaleup_gbps": {
     "value": 1075.0,
     "unit": "GB/s",
     "refs": [
      34
     ],
     "note": "Infinity Fabric links, aggregate bidirectional per GPU",
     "label": "MI355X",
     "date": "2025-06-01"
    }
   }
  },
  "amd_mi455x": {
   "id": "amd_mi455x",
   "name": "MI455X",
   "vendor": "AMD",
   "kind": "accelerator",
   "chip_dir": "amd-gpu",
   "corpus": "public/chips/amd-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/amd-gpu/hw-architecture.md",
   "date": "2026-07-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 5000.0,
     "unit": "TFLOPS",
     "refs": [
      35,
      36
     ],
     "note": "dense FP16/BF16 as listed on the AMD product page",
     "label": "MI455X",
     "date": "2026-07-01"
    },
    "hbm_tbps": {
     "value": 23.3,
     "unit": "TB/s",
     "refs": [
      35,
      36
     ],
     "note": "",
     "label": "MI455X",
     "date": "2026-07-01"
    },
    "hbm_gb": {
     "value": 432.0,
     "unit": "GB",
     "refs": [
      35,
      36
     ],
     "note": "HBM4",
     "label": "MI455X",
     "date": "2026-07-01"
    },
    "scaleup_gbps": {
     "value": 3600.0,
     "unit": "GB/s",
     "refs": [
      35,
      36
     ],
     "note": "UALink over Ethernet (UALoE), 3.6 TB/s aggregate bidirectional per GPU",
     "label": "MI455X",
     "date": "2026-07-01"
    }
   }
  },
  "google_tpu_v2": {
   "id": "google_tpu_v2",
   "name": "TPU v2",
   "vendor": "Google",
   "kind": "accelerator",
   "chip_dir": "google-tpu",
   "corpus": "public/chips/google-tpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/google-tpu/hw-architecture.md",
   "date": "2017-12-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "Figure 2 date convention (public availability); TPU v2 was announced May 2017.",
   "metrics": {
    "bf16_tflops": {
     "value": 46.0,
     "unit": "TFLOPS",
     "refs": [
      37
     ],
     "note": "BF16, per chip (2 TensorCores)",
     "label": "TPU v2",
     "date": "2017-12-01"
    },
    "hbm_tbps": {
     "value": 0.6,
     "unit": "TB/s",
     "refs": [
      37
     ],
     "note": "",
     "label": "TPU v2",
     "date": "2017-12-01"
    },
    "hbm_gb": {
     "value": 16.0,
     "unit": "GB",
     "refs": [
      37
     ],
     "note": "HBM",
     "label": "TPU v2",
     "date": "2017-12-01"
    }
   }
  },
  "google_tpu_v3": {
   "id": "google_tpu_v3",
   "name": "TPU v3",
   "vendor": "Google",
   "kind": "accelerator",
   "chip_dir": "google-tpu",
   "corpus": "public/chips/google-tpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/google-tpu/hw-architecture.md",
   "date": "2018-12-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "Figure 2 date convention (public availability); TPU v3 was announced May 2018.",
   "metrics": {
    "bf16_tflops": {
     "value": 123.0,
     "unit": "TFLOPS",
     "refs": [
      38,
      37
     ],
     "note": "BF16, per chip (2 TensorCores)",
     "label": "TPU v3",
     "date": "2018-12-01"
    },
    "hbm_tbps": {
     "value": 0.9,
     "unit": "TB/s",
     "refs": [
      38,
      37
     ],
     "note": "",
     "label": "TPU v3",
     "date": "2018-12-01"
    },
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      38,
      37
     ],
     "note": "HBM2",
     "label": "TPU v3",
     "date": "2018-12-01"
    }
   }
  },
  "google_tpu_v4": {
   "id": "google_tpu_v4",
   "name": "TPU v4",
   "vendor": "Google",
   "kind": "accelerator",
   "chip_dir": "google-tpu",
   "corpus": "public/chips/google-tpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/google-tpu/hw-architecture.md",
   "date": "2021-12-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "Figure 2 date convention; the survey's tables list TPU v4 under 2020 and Google announced v4 in 2021.",
   "metrics": {
    "bf16_tflops": {
     "value": 275.0,
     "unit": "TFLOPS",
     "refs": [
      39
     ],
     "note": "BF16, per chip",
     "label": "TPU v4",
     "date": "2021-12-01"
    },
    "hbm_tbps": {
     "value": 1.2,
     "unit": "TB/s",
     "refs": [
      39
     ],
     "note": "",
     "label": "TPU v4",
     "date": "2021-12-01"
    },
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      39
     ],
     "note": "HBM2e",
     "label": "TPU v4",
     "date": "2021-12-01"
    },
    "scaleup_gbps": {
     "value": 300.0,
     "unit": "GB/s",
     "refs": [
      39
     ],
     "note": "ICI, 3D torus; aggregate bidirectional per chip",
     "label": "TPU v4",
     "date": "2021-12-01"
    }
   }
  },
  "google_tpu_v5e": {
   "id": "google_tpu_v5e",
   "name": "TPU v5e",
   "vendor": "Google",
   "kind": "accelerator",
   "chip_dir": "google-tpu",
   "corpus": "public/chips/google-tpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/google-tpu/hw-architecture.md",
   "date": "2023-08-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-table",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 197.0,
     "unit": "TFLOPS",
     "refs": [
      40
     ],
     "note": "BF16, per chip",
     "label": "TPU v5e",
     "date": "2023-08-01"
    },
    "hbm_tbps": {
     "value": 0.8,
     "unit": "TB/s",
     "refs": [
      40
     ],
     "note": "",
     "label": "TPU v5e",
     "date": "2023-08-01"
    },
    "hbm_gb": {
     "value": 16.0,
     "unit": "GB",
     "refs": [
      40
     ],
     "note": "HBM2e",
     "label": "TPU v5e",
     "date": "2023-08-01"
    },
    "scaleup_gbps": {
     "value": 400.0,
     "unit": "GB/s",
     "refs": [
      40
     ],
     "note": "ICI, 2D torus; aggregate bidirectional per chip",
     "label": "TPU v5e",
     "date": "2023-08-01"
    }
   }
  },
  "google_tpu_v5p": {
   "id": "google_tpu_v5p",
   "name": "TPU v5p",
   "vendor": "Google",
   "kind": "accelerator",
   "chip_dir": "google-tpu",
   "corpus": "public/chips/google-tpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/google-tpu/hw-architecture.md",
   "date": "2023-12-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 459.0,
     "unit": "TFLOPS",
     "refs": [
      41
     ],
     "note": "BF16, per chip",
     "label": "TPU v5p",
     "date": "2023-12-01"
    },
    "hbm_tbps": {
     "value": 2.765,
     "unit": "TB/s",
     "refs": [
      41
     ],
     "note": "",
     "label": "TPU v5p",
     "date": "2023-12-01"
    },
    "hbm_gb": {
     "value": 96.0,
     "unit": "GB",
     "refs": [
      41
     ],
     "note": "HBM2e; Google's documentation lists 95 GB",
     "label": "TPU v5p",
     "date": "2023-12-01"
    },
    "scaleup_gbps": {
     "value": 1200.0,
     "unit": "GB/s",
     "refs": [
      41
     ],
     "note": "ICI, 3D torus; aggregate bidirectional per chip",
     "label": "TPU v5p",
     "date": "2023-12-01"
    }
   }
  },
  "google_tpu_v6e": {
   "id": "google_tpu_v6e",
   "name": "TPU v6e",
   "vendor": "Google",
   "kind": "accelerator",
   "chip_dir": "google-tpu",
   "corpus": "public/chips/google-tpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/google-tpu/hw-architecture.md",
   "date": "2024-12-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "Trillium. Figure 2 date convention (general availability); announced May 2024.",
   "metrics": {
    "bf16_tflops": {
     "value": 918.0,
     "unit": "TFLOPS",
     "refs": [
      42
     ],
     "note": "BF16, per chip",
     "label": "TPU v6e",
     "date": "2024-12-01"
    },
    "hbm_tbps": {
     "value": 1.64,
     "unit": "TB/s",
     "refs": [
      42
     ],
     "note": "",
     "label": "TPU v6e",
     "date": "2024-12-01"
    },
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      42
     ],
     "note": "HBM3",
     "label": "TPU v6e",
     "date": "2024-12-01"
    },
    "scaleup_gbps": {
     "value": 800.0,
     "unit": "GB/s",
     "refs": [
      42
     ],
     "note": "ICI, 2D torus; aggregate bidirectional per chip",
     "label": "TPU v6e",
     "date": "2024-12-01"
    }
   }
  },
  "google_tpu_v7": {
   "id": "google_tpu_v7",
   "name": "TPU v7",
   "vendor": "Google",
   "kind": "accelerator",
   "chip_dir": "google-tpu",
   "corpus": "public/chips/google-tpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/google-tpu/hw-architecture.md",
   "date": "2025-10-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-figure",
   "note": "Ironwood. Figure 2 date convention; announced April 2025.",
   "metrics": {
    "bf16_tflops": {
     "value": 2307.0,
     "unit": "TFLOPS",
     "refs": [
      43
     ],
     "note": "BF16, per chip",
     "label": "TPU v7",
     "date": "2025-10-01"
    },
    "hbm_tbps": {
     "value": 7.37,
     "unit": "TB/s",
     "refs": [
      43
     ],
     "note": "",
     "label": "TPU v7",
     "date": "2025-10-01"
    },
    "hbm_gb": {
     "value": 192.0,
     "unit": "GB",
     "refs": [
      43
     ],
     "note": "HBM3e",
     "label": "TPU v7",
     "date": "2025-10-01"
    },
    "scaleup_gbps": {
     "value": 1200.0,
     "unit": "GB/s",
     "refs": [
      43
     ],
     "note": "ICI, 3D torus; aggregate bidirectional per chip",
     "label": "TPU v7",
     "date": "2025-10-01"
    }
   }
  },
  "google_tpu_8t": {
   "id": "google_tpu_8t",
   "name": "TPU 8t",
   "vendor": "Google",
   "kind": "accelerator",
   "chip_dir": "google-tpu",
   "corpus": "public/chips/google-tpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/google-tpu/hw-architecture.md",
   "date": "2026-04-01",
   "date_precision": "month",
   "status": "forthcoming",
   "dataset": "survey-figure",
   "note": "Sunfish (training). Google has not disclosed a BF16 peak.",
   "metrics": {
    "hbm_tbps": {
     "value": 6.528,
     "unit": "TB/s",
     "refs": [
      44
     ],
     "note": "",
     "label": "TPU 8t",
     "date": "2026-04-01"
    },
    "hbm_gb": {
     "value": 216.0,
     "unit": "GB",
     "refs": [
      44
     ],
     "note": "HBM3e",
     "label": "TPU 8t",
     "date": "2026-04-01"
    },
    "scaleup_gbps": {
     "value": 1920.0,
     "unit": "GB/s",
     "refs": [
      44
     ],
     "note": "ICI, 3D torus; aggregate bidirectional per chip",
     "label": "TPU 8t",
     "date": "2026-04-01"
    }
   }
  },
  "google_tpu_8i": {
   "id": "google_tpu_8i",
   "name": "TPU 8i",
   "vendor": "Google",
   "kind": "accelerator",
   "chip_dir": "google-tpu",
   "corpus": "public/chips/google-tpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/google-tpu/hw-architecture.md",
   "date": "2026-04-01",
   "date_precision": "month",
   "status": "forthcoming",
   "dataset": "survey-figure",
   "note": "Zebrafish (inference). Google has not disclosed a BF16 peak.",
   "metrics": {
    "hbm_tbps": {
     "value": 8.601,
     "unit": "TB/s",
     "refs": [
      44
     ],
     "note": "",
     "label": "TPU 8i",
     "date": "2026-04-01"
    },
    "hbm_gb": {
     "value": 288.0,
     "unit": "GB",
     "refs": [
      44
     ],
     "note": "HBM3e",
     "label": "TPU 8i",
     "date": "2026-04-01"
    },
    "scaleup_gbps": {
     "value": 1920.0,
     "unit": "GB/s",
     "refs": [
      44
     ],
     "note": "ICI, Boardfly topology; aggregate bidirectional per chip",
     "label": "TPU 8i",
     "date": "2026-04-01"
    }
   }
  },
  "aws_inferentia1": {
   "id": "aws_inferentia1",
   "name": "Inferentia 1",
   "vendor": "AWS",
   "kind": "accelerator",
   "chip_dir": "aws-neuron",
   "corpus": "public/chips/aws-neuron/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/aws-neuron/hw-architecture.md",
   "date": "2018-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-table",
   "note": "Announced November 2018; Inf1 instances became available in 2019, the year used in the survey's tables.",
   "metrics": {
    "bf16_tflops": {
     "value": 64.0,
     "unit": "TFLOPS",
     "refs": [
      45,
      46
     ],
     "note": "BF16/FP16, per chip",
     "label": "Inferentia 1",
     "date": "2018-11-01"
    },
    "hbm_tbps": {
     "value": 0.05,
     "unit": "TB/s",
     "refs": [
      45,
      46
     ],
     "note": "DDR4",
     "label": "Inferentia 1",
     "date": "2018-11-01"
    },
    "hbm_gb": {
     "value": 8.0,
     "unit": "GB",
     "refs": [
      45,
      46
     ],
     "note": "DDR4, not HBM",
     "label": "Inferentia 1",
     "date": "2018-11-01"
    },
    "scaleup_gbps": {
     "value": 32.0,
     "unit": "GB/s",
     "refs": [
      45,
      46
     ],
     "note": "NeuronLink v1 ring, aggregate bidirectional per chip",
     "label": "Inferentia 1",
     "date": "2018-11-01"
    }
   }
  },
  "aws_trainium1": {
   "id": "aws_trainium1",
   "name": "Trainium 1",
   "vendor": "AWS",
   "kind": "accelerator",
   "chip_dir": "aws-neuron",
   "corpus": "public/chips/aws-neuron/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/aws-neuron/hw-architecture.md",
   "date": "2020-12-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-table",
   "note": "Announced December 2020; Trn1 instances became available in 2022, the year used in the survey's tables.",
   "metrics": {
    "bf16_tflops": {
     "value": 190.0,
     "unit": "TFLOPS",
     "refs": [
      47,
      48
     ],
     "note": "BF16, per chip (2 NeuronCore-v2)",
     "label": "Trainium 1",
     "date": "2020-12-01"
    },
    "hbm_tbps": {
     "value": 0.8,
     "unit": "TB/s",
     "refs": [
      47,
      48
     ],
     "note": "",
     "label": "Trainium 1",
     "date": "2020-12-01"
    },
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      47,
      48
     ],
     "note": "HBM2e",
     "label": "Trainium 1",
     "date": "2020-12-01"
    },
    "scaleup_gbps": {
     "value": 384.0,
     "unit": "GB/s",
     "refs": [
      47,
      48
     ],
     "note": "NeuronLink v2, 2D torus; aggregate bidirectional per chip",
     "label": "Trainium 1",
     "date": "2020-12-01"
    }
   }
  },
  "aws_inferentia2": {
   "id": "aws_inferentia2",
   "name": "Inferentia 2",
   "vendor": "AWS",
   "kind": "accelerator",
   "chip_dir": "aws-neuron",
   "corpus": "public/chips/aws-neuron/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/aws-neuron/hw-architecture.md",
   "date": "2022-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-table",
   "note": "Announced November 2022 (Inf2 preview); available 2023, the year used in the survey's tables.",
   "metrics": {
    "bf16_tflops": {
     "value": 190.0,
     "unit": "TFLOPS",
     "refs": [
      49,
      50
     ],
     "note": "BF16, per chip (2 NeuronCore-v2)",
     "label": "Inferentia 2",
     "date": "2022-11-01"
    },
    "hbm_tbps": {
     "value": 0.8,
     "unit": "TB/s",
     "refs": [
      49,
      50
     ],
     "note": "",
     "label": "Inferentia 2",
     "date": "2022-11-01"
    },
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      49,
      50
     ],
     "note": "HBM2e",
     "label": "Inferentia 2",
     "date": "2022-11-01"
    },
    "scaleup_gbps": {
     "value": 192.0,
     "unit": "GB/s",
     "refs": [
      49,
      50
     ],
     "note": "NeuronLink v2 ring; aggregate bidirectional per chip",
     "label": "Inferentia 2",
     "date": "2022-11-01"
    }
   }
  },
  "aws_trainium2": {
   "id": "aws_trainium2",
   "name": "Trainium 2",
   "vendor": "AWS",
   "kind": "accelerator",
   "chip_dir": "aws-neuron",
   "corpus": "public/chips/aws-neuron/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/aws-neuron/hw-architecture.md",
   "date": "2023-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-table",
   "note": "Announced November 2023; Trn2 instances became generally available December 2024, the year used in the survey's tables.",
   "metrics": {
    "bf16_tflops": {
     "value": 667.0,
     "unit": "TFLOPS",
     "refs": [
      51,
      52
     ],
     "note": "BF16/FP16, per chip (8 NeuronCore-v3)",
     "label": "Trainium 2",
     "date": "2023-11-01"
    },
    "hbm_tbps": {
     "value": 2.9,
     "unit": "TB/s",
     "refs": [
      51,
      52
     ],
     "note": "",
     "label": "Trainium 2",
     "date": "2023-11-01"
    },
    "hbm_gb": {
     "value": 96.0,
     "unit": "GB",
     "refs": [
      51,
      52
     ],
     "note": "HBM3",
     "label": "Trainium 2",
     "date": "2023-11-01"
    },
    "scaleup_gbps": {
     "value": 1280.0,
     "unit": "GB/s",
     "refs": [
      51,
      52
     ],
     "note": "NeuronLink v3: 1024 GB/s intra-instance 2D torus + 256 GB/s inter-instance links; aggregate bidirectional per chip",
     "label": "Trainium 2",
     "date": "2023-11-01"
    }
   }
  },
  "aws_trainium3": {
   "id": "aws_trainium3",
   "name": "Trainium 3",
   "vendor": "AWS",
   "kind": "accelerator",
   "chip_dir": "aws-neuron",
   "corpus": "public/chips/aws-neuron/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/aws-neuron/hw-architecture.md",
   "date": "2024-12-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "survey-table",
   "note": "Unveiled December 2024; Trn3 UltraServers listed under 2025 in the survey's tables.",
   "metrics": {
    "bf16_tflops": {
     "value": 671.0,
     "unit": "TFLOPS",
     "refs": [
      53,
      54
     ],
     "note": "BF16/FP16/TF32, per chip, from the AWS Trn3 UltraServer specification table",
     "label": "Trainium 3",
     "date": "2024-12-01"
    },
    "hbm_tbps": {
     "value": 4.9,
     "unit": "TB/s",
     "refs": [
      53,
      54
     ],
     "note": "",
     "label": "Trainium 3",
     "date": "2024-12-01"
    },
    "hbm_gb": {
     "value": 144.0,
     "unit": "GB",
     "refs": [
      53,
      54
     ],
     "note": "HBM3e",
     "label": "Trainium 3",
     "date": "2024-12-01"
    },
    "scaleup_gbps": {
     "value": 2560.0,
     "unit": "GB/s",
     "refs": [
      53,
      54
     ],
     "note": "NeuronLink v4 + NeuronSwitch-v1 all-to-all; aggregate bidirectional per chip",
     "label": "Trainium 3",
     "date": "2024-12-01"
    }
   }
  },
  "meta_mtia_v1": {
   "id": "meta_mtia_v1",
   "name": "MTIA v1",
   "vendor": "Meta",
   "kind": "accelerator",
   "chip_dir": "meta-mtia",
   "corpus": "public/chips/meta-mtia/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/meta-mtia/hw-architecture.md",
   "date": "2023-05-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 51.2,
     "unit": "TFLOPS",
     "refs": [
      55
     ],
     "note": "FP16/BF16 GEMM peak",
     "label": "MTIA v1",
     "date": "2023-05-01"
    },
    "hbm_tbps": {
     "value": 0.176,
     "unit": "TB/s",
     "refs": [
      55
     ],
     "note": "LPDDR5, 176 GB/s",
     "label": "MTIA v1",
     "date": "2023-05-01"
    },
    "hbm_gb": {
     "value": 64.0,
     "unit": "GB",
     "refs": [
      55
     ],
     "note": "LPDDR5",
     "label": "MTIA v1",
     "date": "2023-05-01"
    }
   }
  },
  "meta_mtia_v2": {
   "id": "meta_mtia_v2",
   "name": "MTIA v2",
   "vendor": "Meta",
   "kind": "accelerator",
   "chip_dir": "meta-mtia",
   "corpus": "public/chips/meta-mtia/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/meta-mtia/hw-architecture.md",
   "date": "2024-04-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 0.2048,
     "unit": "TB/s",
     "refs": [
      56
     ],
     "note": "LPDDR5, 204.8 GB/s; FP16/BF16 peak not stated in corpus for v2",
     "label": "MTIA v2",
     "date": "2024-04-01"
    },
    "hbm_gb": {
     "value": 128.0,
     "unit": "GB",
     "refs": [
      56
     ],
     "note": "LPDDR5",
     "label": "MTIA v2",
     "date": "2024-04-01"
    }
   }
  },
  "meta_mtia_2i": {
   "id": "meta_mtia_2i",
   "name": "MTIA 2i (MTIA 200)",
   "vendor": "Meta",
   "kind": "accelerator",
   "chip_dir": "meta-mtia",
   "corpus": "public/chips/meta-mtia/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/meta-mtia/hw-architecture.md",
   "date": "2025-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 177.0,
     "unit": "TFLOPS",
     "refs": [
      57,
      58
     ],
     "note": "FP16/BF16 GEMM peak; same physical die as MTIA v2 (binning/config), per ISCA 2025 and ISCA 2026 Table I",
     "label": "MTIA 2i (MTIA 200)",
     "date": "2025-07-01"
    },
    "hbm_tbps": {
     "value": 0.2048,
     "unit": "TB/s",
     "refs": [
      57,
      58
     ],
     "note": "LPDDR5, 204.8 GB/s",
     "label": "MTIA 2i (MTIA 200)",
     "date": "2025-07-01"
    },
    "hbm_gb": {
     "value": 128.0,
     "unit": "GB",
     "refs": [
      57,
      58
     ],
     "note": "LPDDR5",
     "label": "MTIA 2i (MTIA 200)",
     "date": "2025-07-01"
    }
   }
  },
  "meta_mtia_300": {
   "id": "meta_mtia_300",
   "name": "MTIA 300",
   "vendor": "Meta",
   "kind": "accelerator",
   "chip_dir": "meta-mtia",
   "corpus": "public/chips/meta-mtia/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/meta-mtia/hw-architecture.md",
   "date": "2026-03-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 560.0,
     "unit": "TFLOPS",
     "refs": [
      58,
      59
     ],
     "note": "FP16/BF16 dense GEMM (1,120 TFLOP/s FP8)",
     "label": "MTIA 300",
     "date": "2026-03-01"
    },
    "hbm_tbps": {
     "value": 6.1,
     "unit": "TB/s",
     "refs": [
      58,
      59
     ],
     "note": "HBM3E, read or write",
     "label": "MTIA 300",
     "date": "2026-03-01"
    },
    "hbm_gb": {
     "value": 216.0,
     "unit": "GB",
     "refs": [
      58,
      59
     ],
     "note": "HBM3E, 6 stacks",
     "label": "MTIA 300",
     "date": "2026-03-01"
    }
   }
  },
  "microsoft_maia_100": {
   "id": "microsoft_maia_100",
   "name": "Maia 100",
   "vendor": "Microsoft",
   "kind": "accelerator",
   "chip_dir": "microsoft-maia",
   "corpus": "public/chips/microsoft-maia/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/microsoft-maia/hw-architecture.md",
   "date": "2023-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 800.0,
     "unit": "TFLOPS",
     "refs": [
      60,
      61
     ],
     "note": "0.8 POPS BF16 tensor peak (HC2024); sparsity qualifier not stated in corpus",
     "label": "Maia 100",
     "date": "2023-11-01"
    },
    "hbm_tbps": {
     "value": 1.8,
     "unit": "TB/s",
     "refs": [
      60,
      61
     ],
     "note": "HBM2e",
     "label": "Maia 100",
     "date": "2023-11-01"
    },
    "hbm_gb": {
     "value": 64.0,
     "unit": "GB",
     "refs": [
      60,
      61
     ],
     "note": "HBM2e, 4 stacks",
     "label": "Maia 100",
     "date": "2023-11-01"
    }
   }
  },
  "microsoft_maia_200": {
   "id": "microsoft_maia_200",
   "name": "Maia 200",
   "vendor": "Microsoft",
   "kind": "accelerator",
   "chip_dir": "microsoft-maia",
   "corpus": "public/chips/microsoft-maia/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/microsoft-maia/hw-architecture.md",
   "date": "2026-01-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 7.0,
     "unit": "TB/s",
     "refs": [
      62,
      63
     ],
     "note": "HBM3e",
     "label": "Maia 200",
     "date": "2026-01-01"
    },
    "hbm_gb": {
     "value": 216.0,
     "unit": "GB",
     "refs": [
      62,
      63
     ],
     "note": "HBM3e; only FP4/FP8 peaks disclosed, no BF16",
     "label": "Maia 200",
     "date": "2026-01-01"
    },
    "scaleup_gbps": {
     "value": 2800.0,
     "unit": "GB/s",
     "refs": [
      62,
      63
     ],
     "note": "on-die NIC, 2.8 TB/s stated bidirectional; TB/s to GB/s x1000",
     "label": "Maia 200",
     "date": "2026-01-01"
    }
   }
  },
  "tesla_dojo_d1": {
   "id": "tesla_dojo_d1",
   "name": "Dojo D1",
   "vendor": "Tesla",
   "kind": "accelerator",
   "chip_dir": "tesla-dojo",
   "corpus": "public/chips/tesla-dojo/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/tesla-dojo/hw-architecture.md",
   "date": "2021-08-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 376.0,
     "unit": "TFLOPS",
     "refs": [
      64
     ],
     "note": "BF16/CFP8 peak per Hot Chips 34 (corpus rejects a 362 figure from secondary coverage); no on-die DRAM, HBM lives on tile-level DIP cards",
     "label": "Dojo D1",
     "date": "2021-08-01"
    }
   }
  },
  "qualcomm_cloud_ai_100": {
   "id": "qualcomm_cloud_ai_100",
   "name": "Cloud AI 100",
   "vendor": "Qualcomm",
   "kind": "accelerator",
   "chip_dir": "qualcomm",
   "corpus": "public/chips/qualcomm/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/qualcomm/hw-architecture.md",
   "date": "2019-04-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 200.0,
     "unit": "TFLOPS",
     "refs": [
      65,
      66
     ],
     "note": "FP16 peak (400 TOPS INT8 at 75 W); figure from public/research/qualcomm/investigations/hw-architecture.yaml, chips file lists INT8 only",
     "label": "Cloud AI 100",
     "date": "2019-04-01"
    },
    "hbm_tbps": {
     "value": 0.136,
     "unit": "TB/s",
     "refs": [
      65,
      66
     ],
     "note": "LPDDR4X, 4x64-bit, 136 GB/s",
     "label": "Cloud AI 100",
     "date": "2019-04-01"
    },
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      65,
      66
     ],
     "note": "LPDDR4X, single AIC100 SoC",
     "label": "Cloud AI 100",
     "date": "2019-04-01"
    }
   }
  },
  "qualcomm_cloud_ai_100_ultra": {
   "id": "qualcomm_cloud_ai_100_ultra",
   "name": "Cloud AI 100 Ultra",
   "vendor": "Qualcomm",
   "kind": "accelerator",
   "chip_dir": "qualcomm",
   "corpus": "public/chips/qualcomm/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/qualcomm/hw-architecture.md",
   "date": "2023-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 0.548,
     "unit": "TB/s",
     "refs": [
      67,
      68,
      69
     ],
     "note": "LPDDR4X, 548 GB/s per card",
     "label": "Cloud AI 100 Ultra",
     "date": "2023-11-01"
    },
    "hbm_gb": {
     "value": 128.0,
     "unit": "GB",
     "refs": [
      67,
      68,
      69
     ],
     "note": "LPDDR4X per Ultra card (4 AIC100 SoCs behind a PCIe switch, sold as one accelerator card); 870 TOPS INT8, FP16 peak not stated",
     "label": "Cloud AI 100 Ultra",
     "date": "2023-11-01"
    }
   }
  },
  "dmatrix_corsair": {
   "id": "dmatrix_corsair",
   "name": "Corsair",
   "vendor": "d-Matrix",
   "kind": "accelerator",
   "chip_dir": "d-matrix",
   "corpus": "public/chips/d-matrix/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/d-matrix/hw-architecture.md",
   "date": "2024-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_gb": {
     "value": 256.0,
     "unit": "GB",
     "refs": [
      70,
      71
     ],
     "note": "LPDDR5X capacity tier per Corsair card (2 chips x 4 chiplets, sold as one card); MXINT4/8/16 only so no FP16/BF16; bandwidth given only as ~400 GB/s and skipped",
     "label": "Corsair",
     "date": "2024-11-01"
    }
   }
  },
  "dmatrix_raptor": {
   "id": "dmatrix_raptor",
   "name": "Raptor",
   "vendor": "d-Matrix",
   "kind": "accelerator",
   "chip_dir": "d-matrix",
   "corpus": "public/chips/d-matrix/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/d-matrix/hw-architecture.md",
   "date": "2025-11-01",
   "date_precision": "month",
   "status": "preliminary",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_gb": {
     "value": 128.0,
     "unit": "GB",
     "refs": [
      72
     ],
     "note": "8 on-package LPDDR5X-9600 devices per MCM (secondary tier); primary 3D-DRAM tier capacity not disclosed; peak TFLOPS not disclosed",
     "label": "Raptor",
     "date": "2025-11-01"
    }
   }
  },
  "groq_lpu_v1": {
   "id": "groq_lpu_v1",
   "name": "LPU v1 (TSP)",
   "vendor": "Groq",
   "kind": "accelerator",
   "chip_dir": "groq",
   "corpus": "public/chips/groq/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/groq/hw-architecture.md",
   "date": "2019-10-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 188.0,
     "unit": "TFLOPS",
     "refs": [
      73,
      74
     ],
     "note": "FP16 dense (750 TOPS INT8) at 900 MHz, Samsung 14 nm; SRAM-only, no DRAM",
     "label": "LPU v1 (TSP)",
     "date": "2019-10-01"
    }
   }
  },
  "graphcore_gc200": {
   "id": "graphcore_gc200",
   "name": "GC200 (Colossus Mk2)",
   "vendor": "Graphcore",
   "kind": "accelerator",
   "chip_dir": "graphcore",
   "corpus": "public/chips/graphcore/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/graphcore/hw-architecture.md",
   "date": "2020-07-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 250.0,
     "unit": "TFLOPS",
     "refs": [
      75,
      76
     ],
     "note": "FP16 peak; SRAM-only (900 MB), streaming DDR4 is per IPU-M2000 system so no DRAM metric",
     "label": "GC200 (Colossus Mk2)",
     "date": "2020-07-01"
    }
   }
  },
  "graphcore_bow": {
   "id": "graphcore_bow",
   "name": "Bow IPU",
   "vendor": "Graphcore",
   "kind": "accelerator",
   "chip_dir": "graphcore",
   "corpus": "public/chips/graphcore/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/graphcore/hw-architecture.md",
   "date": "2022-03-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 350.0,
     "unit": "TFLOPS",
     "refs": [
      77,
      78
     ],
     "note": "FP16 peak at 1.85 GHz (same microarchitecture as GC200, WoW power die); no DRAM metric",
     "label": "Bow IPU",
     "date": "2022-03-01"
    }
   }
  },
  "tenstorrent_wormhole": {
   "id": "tenstorrent_wormhole",
   "name": "Wormhole (n150/n300)",
   "vendor": "Tenstorrent",
   "kind": "accelerator",
   "chip_dir": "tenstorrent",
   "corpus": "public/chips/tenstorrent/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/tenstorrent/hw-architecture.md",
   "date": "2022-02-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 0.336,
     "unit": "TB/s",
     "refs": [
      79,
      80
     ],
     "note": "per chip; n150 rated 192-336 GB/s, n300 ~336 GB/s per chip",
     "label": "Wormhole (n150/n300)",
     "date": "2022-02-01"
    },
    "hbm_gb": {
     "value": 12.0,
     "unit": "GB",
     "refs": [
      79,
      80
     ],
     "note": "GDDR6, per chip; n300 board carries 2 chips (24 GB per board)",
     "label": "Wormhole (n150/n300)",
     "date": "2022-02-01"
    }
   }
  },
  "tenstorrent_blackhole": {
   "id": "tenstorrent_blackhole",
   "name": "Blackhole (p150a/p150b)",
   "vendor": "Tenstorrent",
   "kind": "accelerator",
   "chip_dir": "tenstorrent",
   "corpus": "public/chips/tenstorrent/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/tenstorrent/hw-architecture.md",
   "date": "2024-08-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 0.512,
     "unit": "TB/s",
     "refs": [
      81,
      82,
      83
     ],
     "note": "p100a variant is 448 GB/s",
     "label": "Blackhole (p150a/p150b)",
     "date": "2024-08-01"
    },
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      81,
      82,
      83
     ],
     "note": "GDDR6, single chip; p100a variant is 28 GB",
     "label": "Blackhole (p150a/p150b)",
     "date": "2024-08-01"
    }
   }
  },
  "sambanova_sn40l": {
   "id": "sambanova_sn40l",
   "name": "Cardinal SN40L",
   "vendor": "SambaNova",
   "kind": "accelerator",
   "chip_dir": "sambanova",
   "corpus": "public/chips/sambanova/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/sambanova/hw-architecture.md",
   "date": "2023-09-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 638.0,
     "unit": "TFLOPS",
     "refs": [
      84,
      85
     ],
     "note": "BF16 dense, per RDU socket (dual-die package)",
     "label": "Cardinal SN40L",
     "date": "2023-09-01"
    },
    "hbm_tbps": {
     "value": 1.0,
     "unit": "TB/s",
     "refs": [
      84,
      85
     ],
     "note": "vendor states ~1 TB/s (approximate)",
     "label": "Cardinal SN40L",
     "date": "2023-09-01"
    },
    "hbm_gb": {
     "value": 64.0,
     "unit": "GB",
     "refs": [
      84,
      85
     ],
     "note": "64 GiB HBM per RDU as stated by the vendor (kept as 64 for consistency with other vendors' GB figures)",
     "label": "Cardinal SN40L",
     "date": "2023-09-01"
    }
   }
  },
  "rebellions_atom": {
   "id": "rebellions_atom",
   "name": "ATOM",
   "vendor": "Rebellions",
   "kind": "accelerator",
   "chip_dir": "rebellions-atom",
   "corpus": "public/chips/rebellions-atom/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/rebellions-atom/hw-architecture.md",
   "date": "2022-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 32.0,
     "unit": "TFLOPS",
     "refs": [
      86,
      87
     ],
     "note": "FP16 dense peak",
     "label": "ATOM",
     "date": "2022-07-01"
    },
    "hbm_tbps": {
     "value": 0.256,
     "unit": "TB/s",
     "refs": [
      86,
      87
     ],
     "note": "",
     "label": "ATOM",
     "date": "2022-07-01"
    },
    "hbm_gb": {
     "value": 16.0,
     "unit": "GB",
     "refs": [
      86,
      87
     ],
     "note": "GDDR6",
     "label": "ATOM",
     "date": "2022-07-01"
    }
   }
  },
  "rebellions_rebel_quad": {
   "id": "rebellions_rebel_quad",
   "name": "REBEL-Quad (Rebel100)",
   "vendor": "Rebellions",
   "kind": "accelerator",
   "chip_dir": "rebellions-atom",
   "corpus": "public/chips/rebellions-atom/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/rebellions-atom/hw-architecture.md",
   "date": "2025-08-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 4.8,
     "unit": "TB/s",
     "refs": [
      88
     ],
     "note": "package aggregate; 1.2 TB/s per die",
     "label": "REBEL-Quad (Rebel100)",
     "date": "2025-08-01"
    },
    "hbm_gb": {
     "value": 144.0,
     "unit": "GB",
     "refs": [
      88
     ],
     "note": "HBM3e, 4 x 36 GB 12Hi, one 4-die package",
     "label": "REBEL-Quad (Rebel100)",
     "date": "2025-08-01"
    }
   }
  },
  "furiosa_warboy": {
   "id": "furiosa_warboy",
   "name": "Warboy",
   "vendor": "FuriosaAI",
   "kind": "accelerator",
   "chip_dir": "furiosa",
   "corpus": "public/chips/furiosa/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/furiosa/hw-architecture.md",
   "date": "2021-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 0.066,
     "unit": "TB/s",
     "refs": [
      89
     ],
     "note": "",
     "label": "Warboy",
     "date": "2021-07-01"
    },
    "hbm_gb": {
     "value": 16.0,
     "unit": "GB",
     "refs": [
      89
     ],
     "note": "LPDDR4X",
     "label": "Warboy",
     "date": "2021-07-01"
    }
   }
  },
  "furiosa_rngd": {
   "id": "furiosa_rngd",
   "name": "RNGD",
   "vendor": "FuriosaAI",
   "kind": "accelerator",
   "chip_dir": "furiosa",
   "corpus": "public/chips/furiosa/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/furiosa/hw-architecture.md",
   "date": "2024-08-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 1.5,
     "unit": "TB/s",
     "refs": [
      90,
      91
     ],
     "note": "",
     "label": "RNGD",
     "date": "2024-08-01"
    },
    "hbm_gb": {
     "value": 48.0,
     "unit": "GB",
     "refs": [
      90,
      91
     ],
     "note": "HBM3, 2 stacks on CoWoS-S",
     "label": "RNGD",
     "date": "2024-08-01"
    }
   }
  },
  "esperanto_et_soc_1": {
   "id": "esperanto_et_soc_1",
   "name": "ET-SoC-1",
   "vendor": "Esperanto Technologies",
   "kind": "accelerator",
   "chip_dir": "esperanto",
   "corpus": "public/chips/esperanto/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/esperanto/hw-architecture.md",
   "date": "2021-08-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      92,
      93
     ],
     "note": "LPDDR4x per chip; bandwidth figure in the corpus is marked estimated and is omitted",
     "label": "ET-SoC-1",
     "date": "2021-08-01"
    }
   }
  },
  "nextsilicon_maverick2_pcie": {
   "id": "nextsilicon_maverick2_pcie",
   "name": "Maverick-2 (PCIe, single die)",
   "vendor": "NextSilicon",
   "kind": "accelerator",
   "chip_dir": "nextsilicon-maverick",
   "corpus": "public/chips/nextsilicon-maverick/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/nextsilicon-maverick/hw-architecture.md",
   "date": "2025-10-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 28.2,
     "unit": "TFLOPS",
     "refs": [
      94
     ],
     "note": "FP16 only (no BF16 disclosed); matrix/tensor peak from the vendor spec table reproduced by The Next Platform",
     "label": "Maverick-2 (PCIe, single die)",
     "date": "2025-10-01"
    },
    "hbm_tbps": {
     "value": 3.2,
     "unit": "TB/s",
     "refs": [
      95,
      96
     ],
     "note": "",
     "label": "Maverick-2 (PCIe, single die)",
     "date": "2025-10-01"
    },
    "hbm_gb": {
     "value": 96.0,
     "unit": "GB",
     "refs": [
      95,
      96
     ],
     "note": "HBM3E",
     "label": "Maverick-2 (PCIe, single die)",
     "date": "2025-10-01"
    }
   }
  },
  "nextsilicon_maverick2_oam": {
   "id": "nextsilicon_maverick2_oam",
   "name": "Maverick-2 (OAM, dual die)",
   "vendor": "NextSilicon",
   "kind": "accelerator",
   "chip_dir": "nextsilicon-maverick",
   "corpus": "public/chips/nextsilicon-maverick/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/nextsilicon-maverick/hw-architecture.md",
   "date": "2025-10-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 56.4,
     "unit": "TFLOPS",
     "refs": [
      94
     ],
     "note": "FP16 only (no BF16 disclosed); dual-die matrix/tensor peak from the vendor spec table via The Next Platform",
     "label": "Maverick-2 (OAM, dual die)",
     "date": "2025-10-01"
    },
    "hbm_tbps": {
     "value": 6.4,
     "unit": "TB/s",
     "refs": [
      95,
      96
     ],
     "note": "",
     "label": "Maverick-2 (OAM, dual die)",
     "date": "2025-10-01"
    },
    "hbm_gb": {
     "value": 192.0,
     "unit": "GB",
     "refs": [
      95,
      96
     ],
     "note": "HBM3E, dual-die OAM module",
     "label": "Maverick-2 (OAM, dual die)",
     "date": "2025-10-01"
    }
   }
  },
  "ibm_spyre": {
   "id": "ibm_spyre",
   "name": "Spyre Accelerator",
   "vendor": "IBM",
   "kind": "accelerator",
   "chip_dir": "ibm-spyre",
   "corpus": "public/chips/ibm-spyre/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/ibm-spyre/hw-architecture.md",
   "date": "2025-10-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 0.204,
     "unit": "TB/s",
     "refs": [
      97,
      98
     ],
     "note": "16 LPDDR5 channels at 6.4 Gbps",
     "label": "Spyre Accelerator",
     "date": "2025-10-01"
    },
    "hbm_gb": {
     "value": 128.0,
     "unit": "GB",
     "refs": [
      97,
      98
     ],
     "note": "LPDDR5 on the PCIe card, not HBM",
     "label": "Spyre Accelerator",
     "date": "2025-10-01"
    }
   }
  },
  "pfn_mn_core_2": {
   "id": "pfn_mn_core_2",
   "name": "MN-Core 2",
   "vendor": "Preferred Networks",
   "kind": "accelerator",
   "chip_dir": "preferred-networks-mn-core",
   "corpus": "public/chips/preferred-networks-mn-core/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/preferred-networks-mn-core/hw-architecture.md",
   "date": "2023-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 0.512,
     "unit": "TB/s",
     "refs": [
      99,
      100
     ],
     "note": "",
     "label": "MN-Core 2",
     "date": "2023-11-01"
    },
    "hbm_gb": {
     "value": 16.0,
     "unit": "GB",
     "refs": [
      99,
      100
     ],
     "note": "GDDR6-class, not HBM; manual says 16 GiB, HC36 slide says 16 GB",
     "label": "MN-Core 2",
     "date": "2023-11-01"
    }
   }
  },
  "nvidia_h200": {
   "id": "nvidia_h200",
   "name": "H200",
   "vendor": "NVIDIA",
   "kind": "accelerator",
   "chip_dir": "nvidia-gpu",
   "corpus": "public/chips/nvidia-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/nvidia-gpu/hw-architecture.md",
   "date": "2023-11-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 989.0,
     "unit": "TFLOPS",
     "refs": [
      101
     ],
     "note": "Hopper 4th-gen Tensor Core, dense; H200 SXM5 uses the same 132-SM GH100 die as H100, corpus states 989 for Hopper",
     "label": "H200",
     "date": "2023-11-01"
    },
    "hbm_tbps": {
     "value": 4.8,
     "unit": "TB/s",
     "refs": [
      101,
      102
     ],
     "note": "",
     "label": "H200",
     "date": "2023-11-01"
    },
    "hbm_gb": {
     "value": 141.0,
     "unit": "GB",
     "refs": [
      101,
      102
     ],
     "note": "HBM3e, 6 stacks",
     "label": "H200",
     "date": "2023-11-01"
    },
    "scaleup_gbps": {
     "value": 900.0,
     "unit": "GB/s",
     "refs": [
      101,
      102
     ],
     "note": "NVLink 4 (18 links x 50 GB/s), vendor-stated bidirectional per GPU",
     "label": "H200",
     "date": "2023-11-01"
    }
   }
  },
  "amd_mi300a": {
   "id": "amd_mi300a",
   "name": "MI300A",
   "vendor": "AMD",
   "kind": "accelerator",
   "chip_dir": "amd-gpu",
   "corpus": "public/chips/amd-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/amd-gpu/hw-architecture.md",
   "date": "2023-12-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_gb": {
     "value": 128.0,
     "unit": "GB",
     "refs": [
      103,
      104
     ],
     "note": "HBM3, unified CPU+GPU pool (APU: 24 Zen 4 cores + 228 CUs); corpus gives no BF16 or bandwidth figure",
     "label": "MI300A",
     "date": "2023-12-01"
    }
   }
  },
  "amd_mi325x": {
   "id": "amd_mi325x",
   "name": "MI325X",
   "vendor": "AMD",
   "kind": "accelerator",
   "chip_dir": "amd-gpu",
   "corpus": "public/chips/amd-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/amd-gpu/hw-architecture.md",
   "date": "2024-10-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 1300.0,
     "unit": "TFLOPS",
     "refs": [
      105
     ],
     "note": "FP16/BF16 dense; CDNA3, 304 CUs (same compute as MI300X); corpus ~1.3 PFLOPS",
     "label": "MI325X",
     "date": "2024-10-01"
    },
    "hbm_tbps": {
     "value": 6.0,
     "unit": "TB/s",
     "refs": [
      105
     ],
     "note": "corpus ~6.0 TB/s",
     "label": "MI325X",
     "date": "2024-10-01"
    },
    "hbm_gb": {
     "value": 256.0,
     "unit": "GB",
     "refs": [
      105
     ],
     "note": "HBM3e; AMD Oct-2024 launch spec is 256 GB, corpus carries 288 GB from the June-2024 preview - verify",
     "label": "MI325X",
     "date": "2024-10-01"
    },
    "scaleup_gbps": {
     "value": 896.0,
     "unit": "GB/s",
     "refs": [
      105
     ],
     "note": "7 XGMI links x 128 GB/s bidirectional, 8-GPU mesh (CDNA3 platform)",
     "label": "MI325X",
     "date": "2024-10-01"
    }
   }
  },
  "amd_mi430x": {
   "id": "amd_mi430x",
   "name": "MI430X",
   "vendor": "AMD",
   "kind": "accelerator",
   "chip_dir": "amd-gpu",
   "corpus": "public/chips/amd-gpu/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/amd-gpu/hw-architecture.md",
   "date": "2026-07-01",
   "date_precision": "month",
   "status": "preliminary",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 23.3,
     "unit": "TB/s",
     "refs": [
      106,
      107
     ],
     "note": "",
     "label": "MI430X",
     "date": "2026-07-01"
    },
    "hbm_gb": {
     "value": 432.0,
     "unit": "GB",
     "refs": [
      106,
      107
     ],
     "note": "HBM4, 12 stacks; HPC/sovereign SKU (up to 288 TFLOPS FP64), BF16 not disclosed; availability H1 2027",
     "label": "MI430X",
     "date": "2026-07-01"
    }
   }
  },
  "huawei_ascend_910": {
   "id": "huawei_ascend_910",
   "name": "Ascend 910",
   "vendor": "Huawei",
   "kind": "accelerator",
   "chip_dir": "huawei-ascend",
   "corpus": "public/chips/huawei-ascend/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/huawei-ascend/hw-architecture.md",
   "date": "2018-10-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 256.0,
     "unit": "TFLOPS",
     "refs": [
      108,
      109,
      110
     ],
     "note": "FP16 dense (Da Vinci 1.0, 32 AI cores)",
     "label": "Ascend 910",
     "date": "2018-10-01"
    },
    "hbm_tbps": {
     "value": 1.228,
     "unit": "TB/s",
     "refs": [
      108,
      109,
      110
     ],
     "note": "",
     "label": "Ascend 910",
     "date": "2018-10-01"
    },
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      108,
      109,
      110
     ],
     "note": "HBM2, 4 stacks",
     "label": "Ascend 910",
     "date": "2018-10-01"
    }
   }
  },
  "huawei_ascend_910b": {
   "id": "huawei_ascend_910b",
   "name": "Ascend 910B",
   "vendor": "Huawei",
   "kind": "accelerator",
   "chip_dir": "huawei-ascend",
   "corpus": "public/chips/huawei-ascend/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/huawei-ascend/hw-architecture.md",
   "date": "2022-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "Press-reported figures (Huawei publishes no public datasheet); the corpus dates the 910B to 2022-2023.",
   "metrics": {
    "bf16_tflops": {
     "value": 320.0,
     "unit": "TFLOPS",
     "refs": [
      111,
      110
     ],
     "note": "FP16 dense; no Huawei first-party datasheet in corpus",
     "label": "Ascend 910B",
     "date": "2022-07-01"
    },
    "hbm_tbps": {
     "value": 0.8,
     "unit": "TB/s",
     "refs": [
      111,
      110
     ],
     "note": "corpus writes ~800 GB/s",
     "label": "Ascend 910B",
     "date": "2022-07-01"
    },
    "hbm_gb": {
     "value": 64.0,
     "unit": "GB",
     "refs": [
      111,
      110
     ],
     "note": "HBM2e",
     "label": "Ascend 910B",
     "date": "2022-07-01"
    }
   }
  },
  "huawei_ascend_910c": {
   "id": "huawei_ascend_910c",
   "name": "Ascend 910C",
   "vendor": "Huawei",
   "kind": "accelerator",
   "chip_dir": "huawei-ascend",
   "corpus": "public/chips/huawei-ascend/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/huawei-ascend/hw-architecture.md",
   "date": "2025-03-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_gb": {
     "value": 128.0,
     "unit": "GB",
     "refs": [
      112,
      113,
      110
     ],
     "note": "HBM2e, dual-die MCM (8 stacks); corpus FP16 ~800 TFLOPS and ~1.6 TB/s are approximations, omitted",
     "label": "Ascend 910C",
     "date": "2025-03-01"
    }
   }
  },
  "huawei_ascend_950pr": {
   "id": "huawei_ascend_950pr",
   "name": "Ascend 950PR",
   "vendor": "Huawei",
   "kind": "accelerator",
   "chip_dir": "huawei-ascend",
   "corpus": "public/chips/huawei-ascend/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/huawei-ascend/hw-architecture.md",
   "date": "2025-09-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 1.6,
     "unit": "TB/s",
     "refs": [
      112,
      114
     ],
     "note": "chip spec; FP16/BF16 peak not disclosed; 2 TB/s UnifiedBus direction unstated, omitted",
     "label": "Ascend 950PR",
     "date": "2025-09-01"
    },
    "hbm_gb": {
     "value": 128.0,
     "unit": "GB",
     "refs": [
      112,
      114
     ],
     "note": "HiBL 1.0 in-house HBM-class memory (chip spec); Atlas 350 shipping card derated to up to 112 GB / 1.4 TB/s",
     "label": "Ascend 950PR",
     "date": "2025-09-01"
    }
   }
  },
  "huawei_ascend_950dt": {
   "id": "huawei_ascend_950dt",
   "name": "Ascend 950DT",
   "vendor": "Huawei",
   "kind": "accelerator",
   "chip_dir": "huawei-ascend",
   "corpus": "public/chips/huawei-ascend/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/huawei-ascend/hw-architecture.md",
   "date": "2025-09-01",
   "date_precision": "month",
   "status": "preliminary",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 4.0,
     "unit": "TB/s",
     "refs": [
      112,
      114
     ],
     "note": "FP16/BF16 peak not disclosed; 2 TB/s UnifiedBus direction unstated, omitted",
     "label": "Ascend 950DT",
     "date": "2025-09-01"
    },
    "hbm_gb": {
     "value": 144.0,
     "unit": "GB",
     "refs": [
      112,
      114
     ],
     "note": "HiZQ 2.0 in-house HBM-class memory; Q4 2026 release",
     "label": "Ascend 950DT",
     "date": "2025-09-01"
    }
   }
  },
  "intel_gaudi": {
   "id": "intel_gaudi",
   "name": "Gaudi",
   "vendor": "Intel (Habana)",
   "kind": "accelerator",
   "chip_dir": "intel-gaudi",
   "corpus": "public/chips/intel-gaudi/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/intel-gaudi/hw-architecture.md",
   "date": "2019-06-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      115
     ],
     "note": "HBM2; corpus BF16 ~95 TFLOPS is approximate and bandwidth is not listed, both omitted",
     "label": "Gaudi",
     "date": "2019-06-01"
    }
   }
  },
  "intel_gaudi2": {
   "id": "intel_gaudi2",
   "name": "Gaudi2",
   "vendor": "Intel (Habana)",
   "kind": "accelerator",
   "chip_dir": "intel-gaudi",
   "corpus": "public/chips/intel-gaudi/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/intel-gaudi/hw-architecture.md",
   "date": "2022-05-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 2.45,
     "unit": "TB/s",
     "refs": [
      116,
      117
     ],
     "note": "",
     "label": "Gaudi2",
     "date": "2022-05-01"
    },
    "hbm_gb": {
     "value": 96.0,
     "unit": "GB",
     "refs": [
      116,
      117
     ],
     "note": "HBM2e, 6 stacks; corpus BF16 ~432 TFLOPS is approximate, omitted",
     "label": "Gaudi2",
     "date": "2022-05-01"
    }
   }
  },
  "intel_gaudi3": {
   "id": "intel_gaudi3",
   "name": "Gaudi3",
   "vendor": "Intel (Habana)",
   "kind": "accelerator",
   "chip_dir": "intel-gaudi",
   "corpus": "public/chips/intel-gaudi/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/intel-gaudi/hw-architecture.md",
   "date": "2024-04-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 1835.0,
     "unit": "TFLOPS",
     "refs": [
      117,
      118
     ],
     "note": "BF16 dense matrix, OAM HL-325L",
     "label": "Gaudi3",
     "date": "2024-04-01"
    },
    "hbm_tbps": {
     "value": 3.7,
     "unit": "TB/s",
     "refs": [
      117,
      118
     ],
     "note": "",
     "label": "Gaudi3",
     "date": "2024-04-01"
    },
    "hbm_gb": {
     "value": 128.0,
     "unit": "GB",
     "refs": [
      117,
      118
     ],
     "note": "HBM2e, 8 stacks",
     "label": "Gaudi3",
     "date": "2024-04-01"
    },
    "scaleup_gbps": {
     "value": 1050.0,
     "unit": "GB/s",
     "refs": [
      117,
      118
     ],
     "note": "21 x 200 GbE RoCE v2 scale-up ports; corpus states 4.2 Tbps unidirectional -> doubled to 8.4 Tbps, /8 = 1050 GB/s",
     "label": "Gaudi3",
     "date": "2024-04-01"
    }
   }
  },
  "cambricon_mlu290": {
   "id": "cambricon_mlu290",
   "name": "MLU290-M5",
   "vendor": "Cambricon",
   "kind": "accelerator",
   "chip_dir": "cambricon",
   "corpus": "public/chips/cambricon/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/cambricon/hw-architecture.md",
   "date": "2020-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 1.228,
     "unit": "TB/s",
     "refs": [
      119,
      120,
      121
     ],
     "note": "",
     "label": "MLU290-M5",
     "date": "2020-07-01"
    },
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      119,
      120,
      121
     ],
     "note": "HBM2; hw file's 256 TFLOPS FP16 conflicts with sidecar (256 INT16 TOPS, no FP16 figure), omitted",
     "label": "MLU290-M5",
     "date": "2020-07-01"
    }
   }
  },
  "cambricon_mlu370_x8": {
   "id": "cambricon_mlu370_x8",
   "name": "MLU370-X8",
   "vendor": "Cambricon",
   "kind": "accelerator",
   "chip_dir": "cambricon",
   "corpus": "public/chips/cambricon/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/cambricon/hw-architecture.md",
   "date": "2021-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 0.6144,
     "unit": "TB/s",
     "refs": [
      119,
      120,
      121
     ],
     "note": "dual-chip card; 307.2 GB/s per chip",
     "label": "MLU370-X8",
     "date": "2021-07-01"
    },
    "hbm_gb": {
     "value": 48.0,
     "unit": "GB",
     "refs": [
      119,
      120,
      121
     ],
     "note": "LPDDR5; dual-chip card (2 x Siyuan 370 via MLU-Link), 24 GB per chip; corpus FP16 ~96 TFLOPS is inferred, omitted",
     "label": "MLU370-X8",
     "date": "2021-07-01"
    }
   }
  },
  "kunlunxin_kunlun1": {
   "id": "kunlunxin_kunlun1",
   "name": "Kunlun 1 (XPU-K)",
   "vendor": "Kunlunxin",
   "kind": "accelerator",
   "chip_dir": "kunlunxin",
   "corpus": "public/chips/kunlunxin/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/kunlunxin/hw-architecture.md",
   "date": "2019-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 0.512,
     "unit": "TB/s",
     "refs": [
      122,
      123
     ],
     "note": "",
     "label": "Kunlun 1 (XPU-K)",
     "date": "2019-07-01"
    },
    "hbm_gb": {
     "value": 16.0,
     "unit": "GB",
     "refs": [
      122,
      123
     ],
     "note": "HBM2 (Baidu-era part, Samsung 14nm); corpus FP16 ~64 TFLOPS is approximate and absent from its Hot Chips spec list, omitted",
     "label": "Kunlun 1 (XPU-K)",
     "date": "2019-07-01"
    }
   }
  },
  "kunlunxin_kunlun2_r200": {
   "id": "kunlunxin_kunlun2_r200",
   "name": "Kunlun II (R200/R300)",
   "vendor": "Kunlunxin",
   "kind": "accelerator",
   "chip_dir": "kunlunxin",
   "corpus": "public/chips/kunlunxin/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/kunlunxin/hw-architecture.md",
   "date": "2021-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 128.0,
     "unit": "TFLOPS",
     "refs": [
      124,
      125
     ],
     "note": "FP16 (XPU-R, 7nm); corpus row covers R200 (training) / R300 (inference) SKUs",
     "label": "Kunlun II (R200/R300)",
     "date": "2021-07-01"
    },
    "hbm_tbps": {
     "value": 0.512,
     "unit": "TB/s",
     "refs": [
      124,
      125
     ],
     "note": "",
     "label": "Kunlun II (R200/R300)",
     "date": "2021-07-01"
    },
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      124,
      125
     ],
     "note": "GDDR6",
     "label": "Kunlun II (R200/R300)",
     "date": "2021-07-01"
    }
   }
  },
  "kunlunxin_p800": {
   "id": "kunlunxin_p800",
   "name": "P800 (XPU-P)",
   "vendor": "Kunlunxin",
   "kind": "accelerator",
   "chip_dir": "kunlunxin",
   "corpus": "public/chips/kunlunxin/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/kunlunxin/hw-architecture.md",
   "date": "2024-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "Press-reported figures; Kunlunxin publishes no public datasheet for the P800.",
   "metrics": {
    "bf16_tflops": {
     "value": 345.0,
     "unit": "TFLOPS",
     "refs": [
      126,
      127
     ],
     "note": "FP16; sidecar release window 2024-2025, 10k-card cluster lit 2025-02",
     "label": "P800 (XPU-P)",
     "date": "2024-07-01"
    },
    "hbm_gb": {
     "value": 96.0,
     "unit": "GB",
     "refs": [
      126,
      127
     ],
     "note": "HBM3; corpus bandwidth ~1.6 TB/s approximate, omitted; XLINK 200 GB/s is per port with port count undisclosed, omitted",
     "label": "P800 (XPU-P)",
     "date": "2024-07-01"
    }
   }
  },
  "alibaba_zhenwu_810e": {
   "id": "alibaba_zhenwu_810e",
   "name": "Zhenwu 810E (PPU)",
   "vendor": "Alibaba (T-Head)",
   "kind": "accelerator",
   "chip_dir": "alibaba-t-head",
   "corpus": "public/chips/alibaba-t-head/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/alibaba-t-head/hw-architecture.md",
   "date": "2026-01-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "Press-reported capacity; Alibaba has not published a datasheet for the Zhenwu 810E.",
   "metrics": {
    "hbm_gb": {
     "value": 96.0,
     "unit": "GB",
     "refs": [
      128,
      129
     ],
     "note": "HBM2e; peak FLOPS not disclosed; 700 GB/s inter-chip (7 ICN links) direction unstated, omitted; PPU shown on CCTV 2025-09",
     "label": "Zhenwu 810E (PPU)",
     "date": "2026-01-01"
    }
   }
  },
  "alibaba_zhenwu_m890": {
   "id": "alibaba_zhenwu_m890",
   "name": "Zhenwu M890",
   "vendor": "Alibaba (T-Head)",
   "kind": "accelerator",
   "chip_dir": "alibaba-t-head",
   "corpus": "public/chips/alibaba-t-head/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/alibaba-t-head/hw-architecture.md",
   "date": "2026-05-01",
   "date_precision": "month",
   "status": "preliminary",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_gb": {
     "value": 144.0,
     "unit": "GB",
     "refs": [
      130,
      131
     ],
     "note": "Alibaba wording is 144 GB 'on-chip memory'; type (reported HBM) not vendor-confirmed; bandwidth and FLOPS not disclosed; 800 GB/s inter-chip direction unstated, omitted",
     "label": "Zhenwu M890",
     "date": "2026-05-01"
    }
   }
  },
  "enflame_cloudblazer_t10": {
   "id": "enflame_cloudblazer_t10",
   "name": "CloudBlazer T10",
   "vendor": "Enflame",
   "kind": "accelerator",
   "chip_dir": "enflame",
   "corpus": "public/chips/enflame/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/enflame/hw-architecture.md",
   "date": "2019-12-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      132,
      133
     ],
     "note": "HBM2 (DTU 1.0, GF 12LP); corpus bandwidth ~512 GB/s approximate, omitted; FP16/BF16 not listed",
     "label": "CloudBlazer T10",
     "date": "2019-12-01"
    }
   }
  },
  "enflame_cloudblazer_t20": {
   "id": "enflame_cloudblazer_t20",
   "name": "CloudBlazer T20",
   "vendor": "Enflame",
   "kind": "accelerator",
   "chip_dir": "enflame",
   "corpus": "public/chips/enflame/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/enflame/hw-architecture.md",
   "date": "2021-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_tbps": {
     "value": 1.8,
     "unit": "TB/s",
     "refs": [
      134,
      135
     ],
     "note": "",
     "label": "CloudBlazer T20",
     "date": "2021-07-01"
    },
    "hbm_gb": {
     "value": 64.0,
     "unit": "GB",
     "refs": [
      134,
      135
     ],
     "note": "HBM2e x4 (DTU 2.0 training, 9-die MCM); FP16/BF16 not listed (TF32 160 TFLOPS)",
     "label": "CloudBlazer T20",
     "date": "2021-07-01"
    },
    "scaleup_gbps": {
     "value": 300.0,
     "unit": "GB/s",
     "refs": [
      134,
      135
     ],
     "note": "GCU-LARE 2.0, stated bidirectional for T20-class parts",
     "label": "CloudBlazer T20",
     "date": "2021-07-01"
    }
   }
  },
  "mthreads_mtt_s4000": {
   "id": "mthreads_mtt_s4000",
   "name": "MTT S4000",
   "vendor": "Moore Threads",
   "kind": "accelerator",
   "chip_dir": "mthreads",
   "corpus": "public/chips/mthreads/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/mthreads/hw-architecture.md",
   "date": "2024-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 200.0,
     "unit": "TFLOPS",
     "refs": [
      136,
      137
     ],
     "note": "FP16/BF16 via TCE tensor cores (Chunxiao, TSMC 12nm); corpus records GA 2024",
     "label": "MTT S4000",
     "date": "2024-07-01"
    },
    "hbm_tbps": {
     "value": 0.768,
     "unit": "TB/s",
     "refs": [
      136,
      137
     ],
     "note": "MTLink 1.0 240 GB/s per GPU direction unstated, omitted",
     "label": "MTT S4000",
     "date": "2024-07-01"
    },
    "hbm_gb": {
     "value": 48.0,
     "unit": "GB",
     "refs": [
      136,
      137
     ],
     "note": "GDDR6, 384-bit",
     "label": "MTT S4000",
     "date": "2024-07-01"
    }
   }
  },
  "metax_mxn100": {
   "id": "metax_mxn100",
   "name": "MXN100 (Xisi N100)",
   "vendor": "MetaX",
   "kind": "accelerator",
   "chip_dir": "muxi",
   "corpus": "public/chips/muxi/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/muxi/hw-architecture.md",
   "date": "2023-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "Press-reported figure; MetaX publishes no public peak-throughput datasheet.",
   "metrics": {
    "bf16_tflops": {
     "value": 80.0,
     "unit": "TFLOPS",
     "refs": [
      138,
      139
     ],
     "note": "FP16 (inference + video card, 7nm); HBM2E capacity and bandwidth not disclosed",
     "label": "MXN100 (Xisi N100)",
     "date": "2023-07-01"
    }
   }
  },
  "metax_mxc600": {
   "id": "metax_mxc600",
   "name": "MXC600 (Xiyun C600)",
   "vendor": "MetaX",
   "kind": "accelerator",
   "chip_dir": "muxi",
   "corpus": "public/chips/muxi/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/muxi/hw-architecture.md",
   "date": "2025-07-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "Press-reported figures; MetaX publishes no public datasheet for the C600.",
   "metrics": {
    "hbm_tbps": {
     "value": 3.6,
     "unit": "TB/s",
     "refs": [
      140,
      141
     ],
     "note": "",
     "label": "MXC600 (Xiyun C600)",
     "date": "2025-07-01"
    },
    "hbm_gb": {
     "value": 144.0,
     "unit": "GB",
     "refs": [
      140,
      141
     ],
     "note": "HBM3e; FP8 1000 TFLOPS is the only disclosed compute figure, FP16 ~500 is an estimate, omitted",
     "label": "MXC600 (Xiyun C600)",
     "date": "2025-07-01"
    }
   }
  },
  "iluvatar_tiangai_100": {
   "id": "iluvatar_tiangai_100",
   "name": "TianGai-100 (BI-V100)",
   "vendor": "Iluvatar CoreX",
   "kind": "accelerator",
   "chip_dir": "tianshu-zhixin",
   "corpus": "public/chips/tianshu-zhixin/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/tianshu-zhixin/hw-architecture.md",
   "date": "2021-01-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      142,
      143
     ],
     "note": "HBM2 (TSMC 7nm, CoWoS); corpus FP16 and bandwidth figures are estimates, omitted",
     "label": "TianGai-100 (BI-V100)",
     "date": "2021-01-01"
    }
   }
  },
  "iluvatar_tiangai_150": {
   "id": "iluvatar_tiangai_150",
   "name": "TianGai-150 (BI-V150)",
   "vendor": "Iluvatar CoreX",
   "kind": "accelerator",
   "chip_dir": "tianshu-zhixin",
   "corpus": "public/chips/tianshu-zhixin/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/tianshu-zhixin/hw-architecture.md",
   "date": "2022-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_gb": {
     "value": 64.0,
     "unit": "GB",
     "refs": [
      144,
      142
     ],
     "note": "HBM2; corpus FP16 and bandwidth figures are estimates, omitted",
     "label": "TianGai-150 (BI-V150)",
     "date": "2022-07-01"
    }
   }
  },
  "xiwang_s2": {
   "id": "xiwang_s2",
   "name": "S2",
   "vendor": "Xiwang (曦望)",
   "kind": "accelerator",
   "chip_dir": "xiwang",
   "corpus": "public/chips/xiwang/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/xiwang/hw-architecture.md",
   "date": "2025-07-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_gb": {
     "value": 64.0,
     "unit": "GB",
     "refs": [
      145,
      146
     ],
     "note": "memory type not disclosed (CoWoS suggests HBM); bandwidth and peak FLOPS not disclosed",
     "label": "S2",
     "date": "2025-07-01"
    }
   }
  },
  "vastai_va1": {
   "id": "vastai_va1",
   "name": "载天 VA1",
   "vendor": "VastaiTech",
   "kind": "accelerator",
   "chip_dir": "vastaitech",
   "corpus": "public/chips/vastaitech/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/vastaitech/hw-architecture.md",
   "date": "2021-07-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_gb": {
     "value": 32.0,
     "unit": "GB",
     "refs": [
      147,
      148
     ],
     "note": "memory type and bandwidth not disclosed; launch spec (a 16 GB SKU = 2 dies x 8 GB also exists); INT8-only peak (>200 TOPS)",
     "label": "载天 VA1",
     "date": "2021-07-01"
    }
   }
  },
  "vastai_va1l_2023": {
   "id": "vastai_va1l_2023",
   "name": "载天 VA1L (2023)",
   "vendor": "VastaiTech",
   "kind": "accelerator",
   "chip_dir": "vastaitech",
   "corpus": "public/chips/vastaitech/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/vastaitech/hw-architecture.md",
   "date": "2023-07-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "Press-reported figure from the 2023 launch coverage.",
   "metrics": {
    "bf16_tflops": {
     "value": 72.0,
     "unit": "TFLOPS",
     "refs": [
      149,
      150
     ],
     "note": "FP16 (SG100 generation); 64 GB capacity is derived from an appliance figure, omitted",
     "label": "载天 VA1L (2023)",
     "date": "2023-07-01"
    }
   }
  },
  "vastai_va16": {
   "id": "vastai_va16",
   "name": "载天 VA16",
   "vendor": "VastaiTech",
   "kind": "accelerator",
   "chip_dir": "vastaitech",
   "corpus": "public/chips/vastaitech/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/vastaitech/hw-architecture.md",
   "date": "2025-06-01",
   "date_precision": "month",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "hbm_gb": {
     "value": 128.0,
     "unit": "GB",
     "refs": [
      151,
      152,
      153
     ],
     "note": "4 dies x 32 GB per card; memory type, bandwidth and peak FLOPS not disclosed; first public appearance 2025-06 OEM certification, 128 GB disclosed 2026-04",
     "label": "载天 VA16",
     "date": "2025-06-01"
    }
   }
  },
  "stream_computing_p920": {
   "id": "stream_computing_p920",
   "name": "STCP920 (P920)",
   "vendor": "Stream Computing",
   "kind": "accelerator",
   "chip_dir": "stream-computing",
   "corpus": "public/chips/stream-computing/hw-architecture.md",
   "corpus_url": "https://github.com/Yufeng98/AI-datacenter/blob/main/chips/stream-computing/hw-architecture.md",
   "date": "2021-07-01",
   "date_precision": "year",
   "status": "released",
   "dataset": "chip-corpus",
   "note": "",
   "metrics": {
    "bf16_tflops": {
     "value": 128.0,
     "unit": "TFLOPS",
     "refs": [
      154,
      155
     ],
     "note": "FP16 at 1.0 GHz (no BF16 support); 950/980 SKUs are clock bins of the same die",
     "label": "STCP920 (P920)",
     "date": "2021-07-01"
    },
    "hbm_tbps": {
     "value": 0.108,
     "unit": "TB/s",
     "refs": [
      154,
      155
     ],
     "note": "card-manual figure; a vendor spec table elsewhere gives 119.4 GB/s",
     "label": "STCP920 (P920)",
     "date": "2021-07-01"
    },
    "hbm_gb": {
     "value": 16.0,
     "unit": "GB",
     "refs": [
      154,
      155
     ],
     "note": "LPDDR4X",
     "label": "STCP920 (P920)",
     "date": "2021-07-01"
    }
   }
  }
 },
 "points": [
  {
   "id": "gpt:params_b",
   "product_id": "gpt",
   "metric": "params_b",
   "kind": "model",
   "name": "GPT",
   "label": "GPT",
   "vendor": "OpenAI",
   "date": "2018-06-01",
   "date_precision": "month",
   "value": 0.117,
   "unit": "B params",
   "normalized": 1.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    1
   ],
   "note": ""
  },
  {
   "id": "bert:params_b",
   "product_id": "bert",
   "metric": "params_b",
   "kind": "model",
   "name": "BERT",
   "label": "BERT",
   "vendor": "Google",
   "date": "2018-11-01",
   "date_precision": "month",
   "value": 0.34,
   "unit": "B params",
   "normalized": 2.905982905982906,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    2
   ],
   "note": ""
  },
  {
   "id": "gpt2:params_b",
   "product_id": "gpt2",
   "metric": "params_b",
   "kind": "model",
   "name": "GPT-2",
   "label": "GPT-2",
   "vendor": "OpenAI",
   "date": "2019-11-01",
   "date_precision": "month",
   "value": 1.5,
   "unit": "B params",
   "normalized": 12.82051282051282,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    3
   ],
   "note": ""
  },
  {
   "id": "vit:params_b",
   "product_id": "vit",
   "metric": "params_b",
   "kind": "model",
   "name": "ViT",
   "label": "ViT",
   "vendor": "Google",
   "date": "2020-10-01",
   "date_precision": "month",
   "value": 0.632,
   "unit": "B params",
   "normalized": 5.401709401709401,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    4
   ],
   "note": ""
  },
  {
   "id": "bloom:params_b",
   "product_id": "bloom",
   "metric": "params_b",
   "kind": "model",
   "name": "BLOOM",
   "label": "BLOOM",
   "vendor": "BigScience",
   "date": "2022-07-01",
   "date_precision": "month",
   "value": 176.0,
   "unit": "B params",
   "normalized": 1504.2735042735042,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    5
   ],
   "note": ""
  },
  {
   "id": "llama:params_b",
   "product_id": "llama",
   "metric": "params_b",
   "kind": "model",
   "name": "Llama",
   "label": "Llama",
   "vendor": "Meta",
   "date": "2023-02-01",
   "date_precision": "month",
   "value": 65.0,
   "unit": "B params",
   "normalized": 555.5555555555555,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    6
   ],
   "note": ""
  },
  {
   "id": "llama2:params_b",
   "product_id": "llama2",
   "metric": "params_b",
   "kind": "model",
   "name": "Llama 2",
   "label": "Llama 2",
   "vendor": "Meta",
   "date": "2023-07-01",
   "date_precision": "month",
   "value": 70.0,
   "unit": "B params",
   "normalized": 598.2905982905983,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    7
   ],
   "note": ""
  },
  {
   "id": "grok1:params_b",
   "product_id": "grok1",
   "metric": "params_b",
   "kind": "model",
   "name": "Grok-1",
   "label": "Grok-1",
   "vendor": "xAI",
   "date": "2024-03-01",
   "date_precision": "month",
   "value": 314.0,
   "unit": "B params",
   "normalized": 2683.7606837606836,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    8
   ],
   "note": ""
  },
  {
   "id": "mixtral_8x22b:params_b",
   "product_id": "mixtral_8x22b",
   "metric": "params_b",
   "kind": "model",
   "name": "Mixtral 8x22B",
   "label": "Mixtral 8x22B",
   "vendor": "Mistral AI",
   "date": "2024-04-01",
   "date_precision": "month",
   "value": 141.0,
   "unit": "B params",
   "normalized": 1205.128205128205,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    9
   ],
   "note": ""
  },
  {
   "id": "deepseek_v2:params_b",
   "product_id": "deepseek_v2",
   "metric": "params_b",
   "kind": "model",
   "name": "DeepSeek-V2",
   "label": "DeepSeek-V2",
   "vendor": "DeepSeek",
   "date": "2024-05-01",
   "date_precision": "month",
   "value": 236.0,
   "unit": "B params",
   "normalized": 2017.094017094017,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    10
   ],
   "note": ""
  },
  {
   "id": "nemotron4:params_b",
   "product_id": "nemotron4",
   "metric": "params_b",
   "kind": "model",
   "name": "Nemotron-4",
   "label": "Nemotron-4",
   "vendor": "NVIDIA",
   "date": "2024-06-01",
   "date_precision": "month",
   "value": 340.0,
   "unit": "B params",
   "normalized": 2905.982905982906,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    11
   ],
   "note": ""
  },
  {
   "id": "llama3:params_b",
   "product_id": "llama3",
   "metric": "params_b",
   "kind": "model",
   "name": "Llama 3",
   "label": "Llama 3",
   "vendor": "Meta",
   "date": "2024-07-01",
   "date_precision": "month",
   "value": 405.0,
   "unit": "B params",
   "normalized": 3461.5384615384614,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    12
   ],
   "note": ""
  },
  {
   "id": "grok2:params_b",
   "product_id": "grok2",
   "metric": "params_b",
   "kind": "model",
   "name": "Grok-2",
   "label": "Grok-2",
   "vendor": "xAI",
   "date": "2024-08-01",
   "date_precision": "month",
   "value": 270.0,
   "unit": "B params",
   "normalized": 2307.6923076923076,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    13
   ],
   "note": "~270B total derived from the released checkpoint configuration (h=8192, 64 layers, 8 experts); the August 2024 beta announcement does not state it."
  },
  {
   "id": "deepseek_v3:params_b",
   "product_id": "deepseek_v3",
   "metric": "params_b",
   "kind": "model",
   "name": "DeepSeek-V3",
   "label": "DeepSeek-V3",
   "vendor": "DeepSeek",
   "date": "2024-12-01",
   "date_precision": "month",
   "value": 671.0,
   "unit": "B params",
   "normalized": 5735.042735042734,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    14
   ],
   "note": ""
  },
  {
   "id": "llama4:params_b",
   "product_id": "llama4",
   "metric": "params_b",
   "kind": "model",
   "name": "Llama 4",
   "label": "Llama 4",
   "vendor": "Meta",
   "date": "2025-04-01",
   "date_precision": "month",
   "value": 2000.0,
   "unit": "B params",
   "normalized": 17094.017094017094,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    16
   ],
   "note": "Llama 4 Behemoth, ~2T total parameters"
  },
  {
   "id": "qwen3:params_b",
   "product_id": "qwen3",
   "metric": "params_b",
   "kind": "model",
   "name": "Qwen3",
   "label": "Qwen3",
   "vendor": "Alibaba",
   "date": "2025-04-01",
   "date_precision": "month",
   "value": 235.0,
   "unit": "B params",
   "normalized": 2008.5470085470083,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    15
   ],
   "note": ""
  },
  {
   "id": "pangu_ultra:params_b",
   "product_id": "pangu_ultra",
   "metric": "params_b",
   "kind": "model",
   "name": "Pangu Ultra MoE",
   "label": "Pangu Ultra MoE",
   "vendor": "Huawei",
   "date": "2025-05-01",
   "date_precision": "month",
   "value": 718.0,
   "unit": "B params",
   "normalized": 6136.752136752137,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    17
   ],
   "note": "718B total parameters disclosed in the May 2025 technical report."
  },
  {
   "id": "kimi_k2:params_b",
   "product_id": "kimi_k2",
   "metric": "params_b",
   "kind": "model",
   "name": "Kimi K2",
   "label": "Kimi K2",
   "vendor": "Moonshot AI",
   "date": "2025-07-01",
   "date_precision": "month",
   "value": 1000.0,
   "unit": "B params",
   "normalized": 8547.008547008547,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    18
   ],
   "note": ""
  },
  {
   "id": "deepseek_v4:params_b",
   "product_id": "deepseek_v4",
   "metric": "params_b",
   "kind": "model",
   "name": "DeepSeek-V4-Pro",
   "label": "DeepSeek-V4-Pro",
   "vendor": "DeepSeek",
   "date": "2026-04-01",
   "date_precision": "month",
   "value": 1600.0,
   "unit": "B params",
   "normalized": 13675.213675213674,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    19
   ],
   "note": ""
  },
  {
   "id": "kimi_k3:params_b",
   "product_id": "kimi_k3",
   "metric": "params_b",
   "kind": "model",
   "name": "Kimi K3",
   "label": "Kimi K3",
   "vendor": "Moonshot AI",
   "date": "2026-07-01",
   "date_precision": "month",
   "value": 2800.0,
   "unit": "B params",
   "normalized": 23931.62393162393,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    20
   ],
   "note": ""
  },
  {
   "id": "nvidia_p100:bf16_tflops",
   "product_id": "nvidia_p100",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "P100",
   "label": "P100",
   "vendor": "NVIDIA",
   "date": "2016-04-01",
   "date_precision": "month",
   "value": 21.2,
   "unit": "TFLOPS",
   "normalized": 0.4608695652173913,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    21
   ],
   "note": "FP16 CUDA-core throughput (no Tensor Cores)"
  },
  {
   "id": "nvidia_v100:bf16_tflops",
   "product_id": "nvidia_v100",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "V100",
   "label": "V100",
   "vendor": "NVIDIA",
   "date": "2017-05-01",
   "date_precision": "month",
   "value": 125.0,
   "unit": "TFLOPS",
   "normalized": 2.717391304347826,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    22
   ],
   "note": "FP16 Tensor Core, dense"
  },
  {
   "id": "google_tpu_v2:bf16_tflops",
   "product_id": "google_tpu_v2",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "TPU v2",
   "label": "TPU v2",
   "vendor": "Google",
   "date": "2017-12-01",
   "date_precision": "month",
   "value": 46.0,
   "unit": "TFLOPS",
   "normalized": 1.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    37
   ],
   "note": "BF16, per chip (2 TensorCores)"
  },
  {
   "id": "huawei_ascend_910:bf16_tflops",
   "product_id": "huawei_ascend_910",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Ascend 910",
   "label": "Ascend 910",
   "vendor": "Huawei",
   "date": "2018-10-01",
   "date_precision": "month",
   "value": 256.0,
   "unit": "TFLOPS",
   "normalized": 5.565217391304348,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    108,
    109,
    110
   ],
   "note": "FP16 dense (Da Vinci 1.0, 32 AI cores)"
  },
  {
   "id": "aws_inferentia1:bf16_tflops",
   "product_id": "aws_inferentia1",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Inferentia 1",
   "label": "Inferentia 1",
   "vendor": "AWS",
   "date": "2018-11-01",
   "date_precision": "month",
   "value": 64.0,
   "unit": "TFLOPS",
   "normalized": 1.391304347826087,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    45,
    46
   ],
   "note": "BF16/FP16, per chip"
  },
  {
   "id": "amd_mi50:bf16_tflops",
   "product_id": "amd_mi50",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "MI50",
   "label": "MI50",
   "vendor": "AMD",
   "date": "2018-11-01",
   "date_precision": "month",
   "value": 26.5,
   "unit": "TFLOPS",
   "normalized": 0.5760869565217391,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    30
   ],
   "note": "FP16 packed-math (Vega 20), dense"
  },
  {
   "id": "google_tpu_v3:bf16_tflops",
   "product_id": "google_tpu_v3",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "TPU v3",
   "label": "TPU v3",
   "vendor": "Google",
   "date": "2018-12-01",
   "date_precision": "month",
   "value": 123.0,
   "unit": "TFLOPS",
   "normalized": 2.6739130434782608,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    38,
    37
   ],
   "note": "BF16, per chip (2 TensorCores)"
  },
  {
   "id": "qualcomm_cloud_ai_100:bf16_tflops",
   "product_id": "qualcomm_cloud_ai_100",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Cloud AI 100",
   "label": "Cloud AI 100",
   "vendor": "Qualcomm",
   "date": "2019-04-01",
   "date_precision": "month",
   "value": 200.0,
   "unit": "TFLOPS",
   "normalized": 4.3478260869565215,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    65,
    66
   ],
   "note": "FP16 peak (400 TOPS INT8 at 75 W); figure from public/research/qualcomm/investigations/hw-architecture.yaml, chips file lists INT8 only"
  },
  {
   "id": "groq_lpu_v1:bf16_tflops",
   "product_id": "groq_lpu_v1",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "LPU v1 (TSP)",
   "label": "LPU v1 (TSP)",
   "vendor": "Groq",
   "date": "2019-10-01",
   "date_precision": "month",
   "value": 188.0,
   "unit": "TFLOPS",
   "normalized": 4.086956521739131,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    73,
    74
   ],
   "note": "FP16 dense (750 TOPS INT8) at 900 MHz, Samsung 14 nm; SRAM-only, no DRAM"
  },
  {
   "id": "graphcore_gc200:bf16_tflops",
   "product_id": "graphcore_gc200",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "GC200 (Colossus Mk2)",
   "label": "GC200 (Colossus Mk2)",
   "vendor": "Graphcore",
   "date": "2020-07-01",
   "date_precision": "month",
   "value": 250.0,
   "unit": "TFLOPS",
   "normalized": 5.434782608695652,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    75,
    76
   ],
   "note": "FP16 peak; SRAM-only (900 MB), streaming DDR4 is per IPU-M2000 system so no DRAM metric"
  },
  {
   "id": "nvidia_a100_80gb_sxm:bf16_tflops",
   "product_id": "nvidia_a100_80gb_sxm",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "A100 80GB SXM",
   "label": "A100 80GB SXM",
   "vendor": "NVIDIA",
   "date": "2020-11-01",
   "date_precision": "month",
   "value": 312.0,
   "unit": "TFLOPS",
   "normalized": 6.782608695652174,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    23,
    24
   ],
   "note": "dense FP16/BF16 Tensor Core; 624 is the sparse figure"
  },
  {
   "id": "amd_mi100:bf16_tflops",
   "product_id": "amd_mi100",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "MI100",
   "label": "MI100",
   "vendor": "AMD",
   "date": "2020-11-01",
   "date_precision": "month",
   "value": 184.6,
   "unit": "TFLOPS",
   "normalized": 4.01304347826087,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    31
   ],
   "note": "dense FP16 Matrix Core (BF16 is 92.3 TFLOPS on CDNA 1)"
  },
  {
   "id": "aws_trainium1:bf16_tflops",
   "product_id": "aws_trainium1",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Trainium 1",
   "label": "Trainium 1",
   "vendor": "AWS",
   "date": "2020-12-01",
   "date_precision": "month",
   "value": 190.0,
   "unit": "TFLOPS",
   "normalized": 4.130434782608695,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    47,
    48
   ],
   "note": "BF16, per chip (2 NeuronCore-v2)"
  },
  {
   "id": "kunlunxin_kunlun2_r200:bf16_tflops",
   "product_id": "kunlunxin_kunlun2_r200",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Kunlun II (R200/R300)",
   "label": "Kunlun II (R200/R300)",
   "vendor": "Kunlunxin",
   "date": "2021-07-01",
   "date_precision": "year",
   "value": 128.0,
   "unit": "TFLOPS",
   "normalized": 2.782608695652174,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    124,
    125
   ],
   "note": "FP16 (XPU-R, 7nm); corpus row covers R200 (training) / R300 (inference) SKUs"
  },
  {
   "id": "stream_computing_p920:bf16_tflops",
   "product_id": "stream_computing_p920",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "STCP920 (P920)",
   "label": "STCP920 (P920)",
   "vendor": "Stream Computing",
   "date": "2021-07-01",
   "date_precision": "year",
   "value": 128.0,
   "unit": "TFLOPS",
   "normalized": 2.782608695652174,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    154,
    155
   ],
   "note": "FP16 at 1.0 GHz (no BF16 support); 950/980 SKUs are clock bins of the same die"
  },
  {
   "id": "tesla_dojo_d1:bf16_tflops",
   "product_id": "tesla_dojo_d1",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Dojo D1",
   "label": "Dojo D1",
   "vendor": "Tesla",
   "date": "2021-08-01",
   "date_precision": "month",
   "value": 376.0,
   "unit": "TFLOPS",
   "normalized": 8.173913043478262,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    64
   ],
   "note": "BF16/CFP8 peak per Hot Chips 34 (corpus rejects a 362 figure from secondary coverage); no on-die DRAM, HBM lives on tile-level DIP cards"
  },
  {
   "id": "amd_mi250x:bf16_tflops",
   "product_id": "amd_mi250x",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "MI250X",
   "label": "MI250X",
   "vendor": "AMD",
   "date": "2021-11-01",
   "date_precision": "month",
   "value": 383.0,
   "unit": "TFLOPS",
   "normalized": 8.326086956521738,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    32
   ],
   "note": "dense FP16/BF16 Matrix Core, whole package"
  },
  {
   "id": "google_tpu_v4:bf16_tflops",
   "product_id": "google_tpu_v4",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "TPU v4",
   "label": "TPU v4",
   "vendor": "Google",
   "date": "2021-12-01",
   "date_precision": "month",
   "value": 275.0,
   "unit": "TFLOPS",
   "normalized": 5.978260869565218,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    39
   ],
   "note": "BF16, per chip"
  },
  {
   "id": "graphcore_bow:bf16_tflops",
   "product_id": "graphcore_bow",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Bow IPU",
   "label": "Bow IPU",
   "vendor": "Graphcore",
   "date": "2022-03-01",
   "date_precision": "month",
   "value": 350.0,
   "unit": "TFLOPS",
   "normalized": 7.608695652173913,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    77,
    78
   ],
   "note": "FP16 peak at 1.85 GHz (same microarchitecture as GC200, WoW power die); no DRAM metric"
  },
  {
   "id": "rebellions_atom:bf16_tflops",
   "product_id": "rebellions_atom",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "ATOM",
   "label": "ATOM",
   "vendor": "Rebellions",
   "date": "2022-07-01",
   "date_precision": "year",
   "value": 32.0,
   "unit": "TFLOPS",
   "normalized": 0.6956521739130435,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    86,
    87
   ],
   "note": "FP16 dense peak"
  },
  {
   "id": "huawei_ascend_910b:bf16_tflops",
   "product_id": "huawei_ascend_910b",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Ascend 910B",
   "label": "Ascend 910B",
   "vendor": "Huawei",
   "date": "2022-07-01",
   "date_precision": "year",
   "value": 320.0,
   "unit": "TFLOPS",
   "normalized": 6.956521739130435,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    111,
    110
   ],
   "note": "FP16 dense; no Huawei first-party datasheet in corpus"
  },
  {
   "id": "nvidia_h100:bf16_tflops",
   "product_id": "nvidia_h100",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "H100",
   "label": "H100",
   "vendor": "NVIDIA",
   "date": "2022-09-01",
   "date_precision": "month",
   "value": 989.0,
   "unit": "TFLOPS",
   "normalized": 21.5,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    25
   ],
   "note": "dense FP16/BF16 Tensor Core; 1979 sparse"
  },
  {
   "id": "aws_inferentia2:bf16_tflops",
   "product_id": "aws_inferentia2",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Inferentia 2",
   "label": "Inferentia 2",
   "vendor": "AWS",
   "date": "2022-11-01",
   "date_precision": "month",
   "value": 190.0,
   "unit": "TFLOPS",
   "normalized": 4.130434782608695,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    49,
    50
   ],
   "note": "BF16, per chip (2 NeuronCore-v2)"
  },
  {
   "id": "meta_mtia_v1:bf16_tflops",
   "product_id": "meta_mtia_v1",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "MTIA v1",
   "label": "MTIA v1",
   "vendor": "Meta",
   "date": "2023-05-01",
   "date_precision": "month",
   "value": 51.2,
   "unit": "TFLOPS",
   "normalized": 1.1130434782608696,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    55
   ],
   "note": "FP16/BF16 GEMM peak"
  },
  {
   "id": "metax_mxn100:bf16_tflops",
   "product_id": "metax_mxn100",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "MXN100 (Xisi N100)",
   "label": "MXN100 (Xisi N100)",
   "vendor": "MetaX",
   "date": "2023-07-01",
   "date_precision": "year",
   "value": 80.0,
   "unit": "TFLOPS",
   "normalized": 1.7391304347826086,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    138,
    139
   ],
   "note": "FP16 (inference + video card, 7nm); HBM2E capacity and bandwidth not disclosed"
  },
  {
   "id": "vastai_va1l_2023:bf16_tflops",
   "product_id": "vastai_va1l_2023",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "载天 VA1L (2023)",
   "label": "载天 VA1L (2023)",
   "vendor": "VastaiTech",
   "date": "2023-07-01",
   "date_precision": "month",
   "value": 72.0,
   "unit": "TFLOPS",
   "normalized": 1.565217391304348,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    149,
    150
   ],
   "note": "FP16 (SG100 generation); 64 GB capacity is derived from an appliance figure, omitted"
  },
  {
   "id": "google_tpu_v5e:bf16_tflops",
   "product_id": "google_tpu_v5e",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "TPU v5e",
   "label": "TPU v5e",
   "vendor": "Google",
   "date": "2023-08-01",
   "date_precision": "month",
   "value": 197.0,
   "unit": "TFLOPS",
   "normalized": 4.282608695652174,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    40
   ],
   "note": "BF16, per chip"
  },
  {
   "id": "sambanova_sn40l:bf16_tflops",
   "product_id": "sambanova_sn40l",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Cardinal SN40L",
   "label": "Cardinal SN40L",
   "vendor": "SambaNova",
   "date": "2023-09-01",
   "date_precision": "month",
   "value": 638.0,
   "unit": "TFLOPS",
   "normalized": 13.869565217391305,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    84,
    85
   ],
   "note": "BF16 dense, per RDU socket (dual-die package)"
  },
  {
   "id": "nvidia_h200:bf16_tflops",
   "product_id": "nvidia_h200",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "H200",
   "label": "H200",
   "vendor": "NVIDIA",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 989.0,
   "unit": "TFLOPS",
   "normalized": 21.5,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    101
   ],
   "note": "Hopper 4th-gen Tensor Core, dense; H200 SXM5 uses the same 132-SM GH100 die as H100, corpus states 989 for Hopper"
  },
  {
   "id": "microsoft_maia_100:bf16_tflops",
   "product_id": "microsoft_maia_100",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Maia 100",
   "label": "Maia 100",
   "vendor": "Microsoft",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 800.0,
   "unit": "TFLOPS",
   "normalized": 17.391304347826086,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    60,
    61
   ],
   "note": "0.8 POPS BF16 tensor peak (HC2024); sparsity qualifier not stated in corpus"
  },
  {
   "id": "aws_trainium2:bf16_tflops",
   "product_id": "aws_trainium2",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Trainium 2",
   "label": "Trainium 2",
   "vendor": "AWS",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 667.0,
   "unit": "TFLOPS",
   "normalized": 14.5,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    51,
    52
   ],
   "note": "BF16/FP16, per chip (8 NeuronCore-v3)"
  },
  {
   "id": "amd_mi300x:bf16_tflops",
   "product_id": "amd_mi300x",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "MI300X",
   "label": "MI300X",
   "vendor": "AMD",
   "date": "2023-12-01",
   "date_precision": "month",
   "value": 1307.0,
   "unit": "TFLOPS",
   "normalized": 28.41304347826087,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    33
   ],
   "note": "dense FP16/BF16 Matrix Core; 2615 with structured sparsity"
  },
  {
   "id": "google_tpu_v5p:bf16_tflops",
   "product_id": "google_tpu_v5p",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "TPU v5p",
   "label": "TPU v5p",
   "vendor": "Google",
   "date": "2023-12-01",
   "date_precision": "month",
   "value": 459.0,
   "unit": "TFLOPS",
   "normalized": 9.978260869565217,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    41
   ],
   "note": "BF16, per chip"
  },
  {
   "id": "intel_gaudi3:bf16_tflops",
   "product_id": "intel_gaudi3",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Gaudi3",
   "label": "Gaudi3",
   "vendor": "Intel (Habana)",
   "date": "2024-04-01",
   "date_precision": "month",
   "value": 1835.0,
   "unit": "TFLOPS",
   "normalized": 39.891304347826086,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    117,
    118
   ],
   "note": "BF16 dense matrix, OAM HL-325L"
  },
  {
   "id": "mthreads_mtt_s4000:bf16_tflops",
   "product_id": "mthreads_mtt_s4000",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "MTT S4000",
   "label": "MTT S4000",
   "vendor": "Moore Threads",
   "date": "2024-07-01",
   "date_precision": "year",
   "value": 200.0,
   "unit": "TFLOPS",
   "normalized": 4.3478260869565215,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    136,
    137
   ],
   "note": "FP16/BF16 via TCE tensor cores (Chunxiao, TSMC 12nm); corpus records GA 2024"
  },
  {
   "id": "kunlunxin_p800:bf16_tflops",
   "product_id": "kunlunxin_p800",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "P800 (XPU-P)",
   "label": "P800 (XPU-P)",
   "vendor": "Kunlunxin",
   "date": "2024-07-01",
   "date_precision": "year",
   "value": 345.0,
   "unit": "TFLOPS",
   "normalized": 7.5,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    126,
    127
   ],
   "note": "FP16; sidecar release window 2024-2025, 10k-card cluster lit 2025-02"
  },
  {
   "id": "amd_mi325x:bf16_tflops",
   "product_id": "amd_mi325x",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "MI325X",
   "label": "MI325X",
   "vendor": "AMD",
   "date": "2024-10-01",
   "date_precision": "month",
   "value": 1300.0,
   "unit": "TFLOPS",
   "normalized": 28.26086956521739,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    105
   ],
   "note": "FP16/BF16 dense; CDNA3, 304 CUs (same compute as MI300X); corpus ~1.3 PFLOPS"
  },
  {
   "id": "nvidia_b200:bf16_tflops",
   "product_id": "nvidia_b200",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "B200",
   "label": "B200",
   "vendor": "NVIDIA",
   "date": "2024-12-01",
   "date_precision": "month",
   "value": 2250.0,
   "unit": "TFLOPS",
   "normalized": 48.91304347826087,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    26
   ],
   "note": "dense FP16/BF16 Tensor Core; 4.5 PFLOPS sparse"
  },
  {
   "id": "google_tpu_v6e:bf16_tflops",
   "product_id": "google_tpu_v6e",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "TPU v6e",
   "label": "TPU v6e",
   "vendor": "Google",
   "date": "2024-12-01",
   "date_precision": "month",
   "value": 918.0,
   "unit": "TFLOPS",
   "normalized": 19.956521739130434,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    42
   ],
   "note": "BF16, per chip"
  },
  {
   "id": "aws_trainium3:bf16_tflops",
   "product_id": "aws_trainium3",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Trainium 3",
   "label": "Trainium 3",
   "vendor": "AWS",
   "date": "2024-12-01",
   "date_precision": "month",
   "value": 671.0,
   "unit": "TFLOPS",
   "normalized": 14.58695652173913,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    53,
    54
   ],
   "note": "BF16/FP16/TF32, per chip, from the AWS Trn3 UltraServer specification table"
  },
  {
   "id": "nvidia_b300:bf16_tflops",
   "product_id": "nvidia_b300",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "B300",
   "label": "B300",
   "vendor": "NVIDIA",
   "date": "2025-03-01",
   "date_precision": "month",
   "value": 2560.0,
   "unit": "TFLOPS",
   "normalized": 55.65217391304348,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    27,
    28
   ],
   "note": "dense FP16/BF16 Tensor Core as listed in the survey's Table (Section 5)"
  },
  {
   "id": "amd_mi355x:bf16_tflops",
   "product_id": "amd_mi355x",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "MI355X",
   "label": "MI355X",
   "vendor": "AMD",
   "date": "2025-06-01",
   "date_precision": "month",
   "value": 2560.0,
   "unit": "TFLOPS",
   "normalized": 55.65217391304348,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    34
   ],
   "note": "dense FP16/BF16 Matrix Core"
  },
  {
   "id": "meta_mtia_2i:bf16_tflops",
   "product_id": "meta_mtia_2i",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "MTIA 2i (MTIA 200)",
   "label": "MTIA 2i (MTIA 200)",
   "vendor": "Meta",
   "date": "2025-07-01",
   "date_precision": "year",
   "value": 177.0,
   "unit": "TFLOPS",
   "normalized": 3.847826086956522,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    57,
    58
   ],
   "note": "FP16/BF16 GEMM peak; same physical die as MTIA v2 (binning/config), per ISCA 2025 and ISCA 2026 Table I"
  },
  {
   "id": "nextsilicon_maverick2_oam:bf16_tflops",
   "product_id": "nextsilicon_maverick2_oam",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Maverick-2 (OAM, dual die)",
   "label": "Maverick-2 (OAM, dual die)",
   "vendor": "NextSilicon",
   "date": "2025-10-01",
   "date_precision": "month",
   "value": 56.4,
   "unit": "TFLOPS",
   "normalized": 1.2260869565217392,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    94
   ],
   "note": "FP16 only (no BF16 disclosed); dual-die matrix/tensor peak from the vendor spec table via The Next Platform"
  },
  {
   "id": "nextsilicon_maverick2_pcie:bf16_tflops",
   "product_id": "nextsilicon_maverick2_pcie",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Maverick-2 (PCIe, single die)",
   "label": "Maverick-2 (PCIe, single die)",
   "vendor": "NextSilicon",
   "date": "2025-10-01",
   "date_precision": "month",
   "value": 28.2,
   "unit": "TFLOPS",
   "normalized": 0.6130434782608696,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    94
   ],
   "note": "FP16 only (no BF16 disclosed); matrix/tensor peak from the vendor spec table reproduced by The Next Platform"
  },
  {
   "id": "google_tpu_v7:bf16_tflops",
   "product_id": "google_tpu_v7",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "TPU v7",
   "label": "TPU v7",
   "vendor": "Google",
   "date": "2025-10-01",
   "date_precision": "month",
   "value": 2307.0,
   "unit": "TFLOPS",
   "normalized": 50.15217391304348,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    43
   ],
   "note": "BF16, per chip"
  },
  {
   "id": "nvidia_rubin:bf16_tflops",
   "product_id": "nvidia_rubin",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "Rubin GPU",
   "label": "Rubin GPU",
   "vendor": "NVIDIA",
   "date": "2026-01-01",
   "date_precision": "month",
   "value": 4000.0,
   "unit": "TFLOPS",
   "normalized": 86.95652173913044,
   "status": "preliminary",
   "dataset": "survey-figure",
   "refs": [
    29
   ],
   "note": "dense FP16/BF16, preliminary"
  },
  {
   "id": "meta_mtia_300:bf16_tflops",
   "product_id": "meta_mtia_300",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "MTIA 300",
   "label": "MTIA 300",
   "vendor": "Meta",
   "date": "2026-03-01",
   "date_precision": "month",
   "value": 560.0,
   "unit": "TFLOPS",
   "normalized": 12.173913043478262,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    58,
    59
   ],
   "note": "FP16/BF16 dense GEMM (1,120 TFLOP/s FP8)"
  },
  {
   "id": "amd_mi455x:bf16_tflops",
   "product_id": "amd_mi455x",
   "metric": "bf16_tflops",
   "kind": "accelerator",
   "name": "MI455X",
   "label": "MI455X",
   "vendor": "AMD",
   "date": "2026-07-01",
   "date_precision": "month",
   "value": 5000.0,
   "unit": "TFLOPS",
   "normalized": 108.69565217391305,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    35,
    36
   ],
   "note": "dense FP16/BF16 as listed on the AMD product page"
  },
  {
   "id": "nvidia_p100:hbm_tbps",
   "product_id": "nvidia_p100",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "P100",
   "label": "P100",
   "vendor": "NVIDIA",
   "date": "2016-04-01",
   "date_precision": "month",
   "value": 0.7,
   "unit": "TB/s",
   "normalized": 1.1666666666666667,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    21
   ],
   "note": ""
  },
  {
   "id": "nvidia_v100:hbm_tbps",
   "product_id": "nvidia_v100",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "V100",
   "label": "V100",
   "vendor": "NVIDIA",
   "date": "2017-05-01",
   "date_precision": "month",
   "value": 0.9,
   "unit": "TB/s",
   "normalized": 1.5,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    22
   ],
   "note": ""
  },
  {
   "id": "google_tpu_v2:hbm_tbps",
   "product_id": "google_tpu_v2",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "TPU v2",
   "label": "TPU v2",
   "vendor": "Google",
   "date": "2017-12-01",
   "date_precision": "month",
   "value": 0.6,
   "unit": "TB/s",
   "normalized": 1.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    37
   ],
   "note": ""
  },
  {
   "id": "huawei_ascend_910:hbm_tbps",
   "product_id": "huawei_ascend_910",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Ascend 910",
   "label": "Ascend 910",
   "vendor": "Huawei",
   "date": "2018-10-01",
   "date_precision": "month",
   "value": 1.228,
   "unit": "TB/s",
   "normalized": 2.046666666666667,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    108,
    109,
    110
   ],
   "note": ""
  },
  {
   "id": "aws_inferentia1:hbm_tbps",
   "product_id": "aws_inferentia1",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Inferentia 1",
   "label": "Inferentia 1",
   "vendor": "AWS",
   "date": "2018-11-01",
   "date_precision": "month",
   "value": 0.05,
   "unit": "TB/s",
   "normalized": 0.08333333333333334,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    45,
    46
   ],
   "note": "DDR4"
  },
  {
   "id": "amd_mi50:hbm_tbps",
   "product_id": "amd_mi50",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MI50",
   "label": "MI50",
   "vendor": "AMD",
   "date": "2018-11-01",
   "date_precision": "month",
   "value": 1.0,
   "unit": "TB/s",
   "normalized": 1.6666666666666667,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    30
   ],
   "note": ""
  },
  {
   "id": "google_tpu_v3:hbm_tbps",
   "product_id": "google_tpu_v3",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "TPU v3",
   "label": "TPU v3",
   "vendor": "Google",
   "date": "2018-12-01",
   "date_precision": "month",
   "value": 0.9,
   "unit": "TB/s",
   "normalized": 1.5,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    38,
    37
   ],
   "note": ""
  },
  {
   "id": "qualcomm_cloud_ai_100:hbm_tbps",
   "product_id": "qualcomm_cloud_ai_100",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Cloud AI 100",
   "label": "Cloud AI 100",
   "vendor": "Qualcomm",
   "date": "2019-04-01",
   "date_precision": "month",
   "value": 0.136,
   "unit": "TB/s",
   "normalized": 0.22666666666666668,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    65,
    66
   ],
   "note": "LPDDR4X, 4x64-bit, 136 GB/s"
  },
  {
   "id": "kunlunxin_kunlun1:hbm_tbps",
   "product_id": "kunlunxin_kunlun1",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Kunlun 1 (XPU-K)",
   "label": "Kunlun 1 (XPU-K)",
   "vendor": "Kunlunxin",
   "date": "2019-07-01",
   "date_precision": "year",
   "value": 0.512,
   "unit": "TB/s",
   "normalized": 0.8533333333333334,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    122,
    123
   ],
   "note": ""
  },
  {
   "id": "cambricon_mlu290:hbm_tbps",
   "product_id": "cambricon_mlu290",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MLU290-M5",
   "label": "MLU290-M5",
   "vendor": "Cambricon",
   "date": "2020-07-01",
   "date_precision": "year",
   "value": 1.228,
   "unit": "TB/s",
   "normalized": 2.046666666666667,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    119,
    120,
    121
   ],
   "note": ""
  },
  {
   "id": "nvidia_a100_80gb_sxm:hbm_tbps",
   "product_id": "nvidia_a100_80gb_sxm",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "A100 80GB SXM",
   "label": "A100 80GB SXM",
   "vendor": "NVIDIA",
   "date": "2020-11-01",
   "date_precision": "month",
   "value": 2.039,
   "unit": "TB/s",
   "normalized": 3.398333333333334,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    23,
    24
   ],
   "note": ""
  },
  {
   "id": "amd_mi100:hbm_tbps",
   "product_id": "amd_mi100",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MI100",
   "label": "MI100",
   "vendor": "AMD",
   "date": "2020-11-01",
   "date_precision": "month",
   "value": 1.23,
   "unit": "TB/s",
   "normalized": 2.0500000000000003,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    31
   ],
   "note": ""
  },
  {
   "id": "aws_trainium1:hbm_tbps",
   "product_id": "aws_trainium1",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Trainium 1",
   "label": "Trainium 1",
   "vendor": "AWS",
   "date": "2020-12-01",
   "date_precision": "month",
   "value": 0.8,
   "unit": "TB/s",
   "normalized": 1.3333333333333335,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    47,
    48
   ],
   "note": ""
  },
  {
   "id": "enflame_cloudblazer_t20:hbm_tbps",
   "product_id": "enflame_cloudblazer_t20",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "CloudBlazer T20",
   "label": "CloudBlazer T20",
   "vendor": "Enflame",
   "date": "2021-07-01",
   "date_precision": "year",
   "value": 1.8,
   "unit": "TB/s",
   "normalized": 3.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    134,
    135
   ],
   "note": ""
  },
  {
   "id": "kunlunxin_kunlun2_r200:hbm_tbps",
   "product_id": "kunlunxin_kunlun2_r200",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Kunlun II (R200/R300)",
   "label": "Kunlun II (R200/R300)",
   "vendor": "Kunlunxin",
   "date": "2021-07-01",
   "date_precision": "year",
   "value": 0.512,
   "unit": "TB/s",
   "normalized": 0.8533333333333334,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    124,
    125
   ],
   "note": ""
  },
  {
   "id": "cambricon_mlu370_x8:hbm_tbps",
   "product_id": "cambricon_mlu370_x8",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MLU370-X8",
   "label": "MLU370-X8",
   "vendor": "Cambricon",
   "date": "2021-07-01",
   "date_precision": "year",
   "value": 0.6144,
   "unit": "TB/s",
   "normalized": 1.024,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    119,
    120,
    121
   ],
   "note": "dual-chip card; 307.2 GB/s per chip"
  },
  {
   "id": "stream_computing_p920:hbm_tbps",
   "product_id": "stream_computing_p920",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "STCP920 (P920)",
   "label": "STCP920 (P920)",
   "vendor": "Stream Computing",
   "date": "2021-07-01",
   "date_precision": "year",
   "value": 0.108,
   "unit": "TB/s",
   "normalized": 0.18,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    154,
    155
   ],
   "note": "card-manual figure; a vendor spec table elsewhere gives 119.4 GB/s"
  },
  {
   "id": "furiosa_warboy:hbm_tbps",
   "product_id": "furiosa_warboy",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Warboy",
   "label": "Warboy",
   "vendor": "FuriosaAI",
   "date": "2021-07-01",
   "date_precision": "year",
   "value": 0.066,
   "unit": "TB/s",
   "normalized": 0.11000000000000001,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    89
   ],
   "note": ""
  },
  {
   "id": "amd_mi250x:hbm_tbps",
   "product_id": "amd_mi250x",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MI250X",
   "label": "MI250X",
   "vendor": "AMD",
   "date": "2021-11-01",
   "date_precision": "month",
   "value": 3.277,
   "unit": "TB/s",
   "normalized": 5.461666666666667,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    32
   ],
   "note": ""
  },
  {
   "id": "google_tpu_v4:hbm_tbps",
   "product_id": "google_tpu_v4",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "TPU v4",
   "label": "TPU v4",
   "vendor": "Google",
   "date": "2021-12-01",
   "date_precision": "month",
   "value": 1.2,
   "unit": "TB/s",
   "normalized": 2.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    39
   ],
   "note": ""
  },
  {
   "id": "tenstorrent_wormhole:hbm_tbps",
   "product_id": "tenstorrent_wormhole",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Wormhole (n150/n300)",
   "label": "Wormhole (n150/n300)",
   "vendor": "Tenstorrent",
   "date": "2022-02-01",
   "date_precision": "month",
   "value": 0.336,
   "unit": "TB/s",
   "normalized": 0.56,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    79,
    80
   ],
   "note": "per chip; n150 rated 192-336 GB/s, n300 ~336 GB/s per chip"
  },
  {
   "id": "intel_gaudi2:hbm_tbps",
   "product_id": "intel_gaudi2",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Gaudi2",
   "label": "Gaudi2",
   "vendor": "Intel (Habana)",
   "date": "2022-05-01",
   "date_precision": "month",
   "value": 2.45,
   "unit": "TB/s",
   "normalized": 4.083333333333334,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    116,
    117
   ],
   "note": ""
  },
  {
   "id": "rebellions_atom:hbm_tbps",
   "product_id": "rebellions_atom",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "ATOM",
   "label": "ATOM",
   "vendor": "Rebellions",
   "date": "2022-07-01",
   "date_precision": "year",
   "value": 0.256,
   "unit": "TB/s",
   "normalized": 0.4266666666666667,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    86,
    87
   ],
   "note": ""
  },
  {
   "id": "huawei_ascend_910b:hbm_tbps",
   "product_id": "huawei_ascend_910b",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Ascend 910B",
   "label": "Ascend 910B",
   "vendor": "Huawei",
   "date": "2022-07-01",
   "date_precision": "year",
   "value": 0.8,
   "unit": "TB/s",
   "normalized": 1.3333333333333335,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    111,
    110
   ],
   "note": "corpus writes ~800 GB/s"
  },
  {
   "id": "nvidia_h100:hbm_tbps",
   "product_id": "nvidia_h100",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "H100",
   "label": "H100",
   "vendor": "NVIDIA",
   "date": "2022-09-01",
   "date_precision": "month",
   "value": 3.35,
   "unit": "TB/s",
   "normalized": 5.583333333333334,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    25
   ],
   "note": ""
  },
  {
   "id": "aws_inferentia2:hbm_tbps",
   "product_id": "aws_inferentia2",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Inferentia 2",
   "label": "Inferentia 2",
   "vendor": "AWS",
   "date": "2022-11-01",
   "date_precision": "month",
   "value": 0.8,
   "unit": "TB/s",
   "normalized": 1.3333333333333335,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    49,
    50
   ],
   "note": ""
  },
  {
   "id": "meta_mtia_v1:hbm_tbps",
   "product_id": "meta_mtia_v1",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MTIA v1",
   "label": "MTIA v1",
   "vendor": "Meta",
   "date": "2023-05-01",
   "date_precision": "month",
   "value": 0.176,
   "unit": "TB/s",
   "normalized": 0.29333333333333333,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    55
   ],
   "note": "LPDDR5, 176 GB/s"
  },
  {
   "id": "google_tpu_v5e:hbm_tbps",
   "product_id": "google_tpu_v5e",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "TPU v5e",
   "label": "TPU v5e",
   "vendor": "Google",
   "date": "2023-08-01",
   "date_precision": "month",
   "value": 0.8,
   "unit": "TB/s",
   "normalized": 1.3333333333333335,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    40
   ],
   "note": ""
  },
  {
   "id": "sambanova_sn40l:hbm_tbps",
   "product_id": "sambanova_sn40l",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Cardinal SN40L",
   "label": "Cardinal SN40L",
   "vendor": "SambaNova",
   "date": "2023-09-01",
   "date_precision": "month",
   "value": 1.0,
   "unit": "TB/s",
   "normalized": 1.6666666666666667,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    84,
    85
   ],
   "note": "vendor states ~1 TB/s (approximate)"
  },
  {
   "id": "qualcomm_cloud_ai_100_ultra:hbm_tbps",
   "product_id": "qualcomm_cloud_ai_100_ultra",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Cloud AI 100 Ultra",
   "label": "Cloud AI 100 Ultra",
   "vendor": "Qualcomm",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 0.548,
   "unit": "TB/s",
   "normalized": 0.9133333333333334,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    67,
    68,
    69
   ],
   "note": "LPDDR4X, 548 GB/s per card"
  },
  {
   "id": "nvidia_h200:hbm_tbps",
   "product_id": "nvidia_h200",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "H200",
   "label": "H200",
   "vendor": "NVIDIA",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 4.8,
   "unit": "TB/s",
   "normalized": 8.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    101,
    102
   ],
   "note": ""
  },
  {
   "id": "pfn_mn_core_2:hbm_tbps",
   "product_id": "pfn_mn_core_2",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MN-Core 2",
   "label": "MN-Core 2",
   "vendor": "Preferred Networks",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 0.512,
   "unit": "TB/s",
   "normalized": 0.8533333333333334,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    99,
    100
   ],
   "note": ""
  },
  {
   "id": "microsoft_maia_100:hbm_tbps",
   "product_id": "microsoft_maia_100",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Maia 100",
   "label": "Maia 100",
   "vendor": "Microsoft",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 1.8,
   "unit": "TB/s",
   "normalized": 3.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    60,
    61
   ],
   "note": "HBM2e"
  },
  {
   "id": "aws_trainium2:hbm_tbps",
   "product_id": "aws_trainium2",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Trainium 2",
   "label": "Trainium 2",
   "vendor": "AWS",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 2.9,
   "unit": "TB/s",
   "normalized": 4.833333333333333,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    51,
    52
   ],
   "note": ""
  },
  {
   "id": "amd_mi300x:hbm_tbps",
   "product_id": "amd_mi300x",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MI300X",
   "label": "MI300X",
   "vendor": "AMD",
   "date": "2023-12-01",
   "date_precision": "month",
   "value": 5.325,
   "unit": "TB/s",
   "normalized": 8.875,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    33
   ],
   "note": ""
  },
  {
   "id": "google_tpu_v5p:hbm_tbps",
   "product_id": "google_tpu_v5p",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "TPU v5p",
   "label": "TPU v5p",
   "vendor": "Google",
   "date": "2023-12-01",
   "date_precision": "month",
   "value": 2.765,
   "unit": "TB/s",
   "normalized": 4.608333333333333,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    41
   ],
   "note": ""
  },
  {
   "id": "intel_gaudi3:hbm_tbps",
   "product_id": "intel_gaudi3",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Gaudi3",
   "label": "Gaudi3",
   "vendor": "Intel (Habana)",
   "date": "2024-04-01",
   "date_precision": "month",
   "value": 3.7,
   "unit": "TB/s",
   "normalized": 6.166666666666667,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    117,
    118
   ],
   "note": ""
  },
  {
   "id": "meta_mtia_v2:hbm_tbps",
   "product_id": "meta_mtia_v2",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MTIA v2",
   "label": "MTIA v2",
   "vendor": "Meta",
   "date": "2024-04-01",
   "date_precision": "month",
   "value": 0.2048,
   "unit": "TB/s",
   "normalized": 0.3413333333333334,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    56
   ],
   "note": "LPDDR5, 204.8 GB/s; FP16/BF16 peak not stated in corpus for v2"
  },
  {
   "id": "mthreads_mtt_s4000:hbm_tbps",
   "product_id": "mthreads_mtt_s4000",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MTT S4000",
   "label": "MTT S4000",
   "vendor": "Moore Threads",
   "date": "2024-07-01",
   "date_precision": "year",
   "value": 0.768,
   "unit": "TB/s",
   "normalized": 1.28,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    136,
    137
   ],
   "note": "MTLink 1.0 240 GB/s per GPU direction unstated, omitted"
  },
  {
   "id": "tenstorrent_blackhole:hbm_tbps",
   "product_id": "tenstorrent_blackhole",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Blackhole (p150a/p150b)",
   "label": "Blackhole (p150a/p150b)",
   "vendor": "Tenstorrent",
   "date": "2024-08-01",
   "date_precision": "month",
   "value": 0.512,
   "unit": "TB/s",
   "normalized": 0.8533333333333334,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    81,
    82,
    83
   ],
   "note": "p100a variant is 448 GB/s"
  },
  {
   "id": "furiosa_rngd:hbm_tbps",
   "product_id": "furiosa_rngd",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "RNGD",
   "label": "RNGD",
   "vendor": "FuriosaAI",
   "date": "2024-08-01",
   "date_precision": "month",
   "value": 1.5,
   "unit": "TB/s",
   "normalized": 2.5,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    90,
    91
   ],
   "note": ""
  },
  {
   "id": "amd_mi325x:hbm_tbps",
   "product_id": "amd_mi325x",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MI325X",
   "label": "MI325X",
   "vendor": "AMD",
   "date": "2024-10-01",
   "date_precision": "month",
   "value": 6.0,
   "unit": "TB/s",
   "normalized": 10.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    105
   ],
   "note": "corpus ~6.0 TB/s"
  },
  {
   "id": "nvidia_b200:hbm_tbps",
   "product_id": "nvidia_b200",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "B200",
   "label": "B200",
   "vendor": "NVIDIA",
   "date": "2024-12-01",
   "date_precision": "month",
   "value": 8.0,
   "unit": "TB/s",
   "normalized": 13.333333333333334,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    26
   ],
   "note": ""
  },
  {
   "id": "google_tpu_v6e:hbm_tbps",
   "product_id": "google_tpu_v6e",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "TPU v6e",
   "label": "TPU v6e",
   "vendor": "Google",
   "date": "2024-12-01",
   "date_precision": "month",
   "value": 1.64,
   "unit": "TB/s",
   "normalized": 2.7333333333333334,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    42
   ],
   "note": ""
  },
  {
   "id": "aws_trainium3:hbm_tbps",
   "product_id": "aws_trainium3",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Trainium 3",
   "label": "Trainium 3",
   "vendor": "AWS",
   "date": "2024-12-01",
   "date_precision": "month",
   "value": 4.9,
   "unit": "TB/s",
   "normalized": 8.166666666666668,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    53,
    54
   ],
   "note": ""
  },
  {
   "id": "nvidia_b300:hbm_tbps",
   "product_id": "nvidia_b300",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "B300",
   "label": "B300",
   "vendor": "NVIDIA",
   "date": "2025-03-01",
   "date_precision": "month",
   "value": 8.0,
   "unit": "TB/s",
   "normalized": 13.333333333333334,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    27,
    28
   ],
   "note": ""
  },
  {
   "id": "amd_mi355x:hbm_tbps",
   "product_id": "amd_mi355x",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MI355X",
   "label": "MI355X",
   "vendor": "AMD",
   "date": "2025-06-01",
   "date_precision": "month",
   "value": 8.0,
   "unit": "TB/s",
   "normalized": 13.333333333333334,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    34
   ],
   "note": ""
  },
  {
   "id": "meta_mtia_2i:hbm_tbps",
   "product_id": "meta_mtia_2i",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MTIA 2i (MTIA 200)",
   "label": "MTIA 2i (MTIA 200)",
   "vendor": "Meta",
   "date": "2025-07-01",
   "date_precision": "year",
   "value": 0.2048,
   "unit": "TB/s",
   "normalized": 0.3413333333333334,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    57,
    58
   ],
   "note": "LPDDR5, 204.8 GB/s"
  },
  {
   "id": "metax_mxc600:hbm_tbps",
   "product_id": "metax_mxc600",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MXC600 (Xiyun C600)",
   "label": "MXC600 (Xiyun C600)",
   "vendor": "MetaX",
   "date": "2025-07-01",
   "date_precision": "month",
   "value": 3.6,
   "unit": "TB/s",
   "normalized": 6.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    140,
    141
   ],
   "note": ""
  },
  {
   "id": "rebellions_rebel_quad:hbm_tbps",
   "product_id": "rebellions_rebel_quad",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "REBEL-Quad (Rebel100)",
   "label": "REBEL-Quad (Rebel100)",
   "vendor": "Rebellions",
   "date": "2025-08-01",
   "date_precision": "month",
   "value": 4.8,
   "unit": "TB/s",
   "normalized": 8.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    88
   ],
   "note": "package aggregate; 1.2 TB/s per die"
  },
  {
   "id": "huawei_ascend_950dt:hbm_tbps",
   "product_id": "huawei_ascend_950dt",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Ascend 950DT",
   "label": "Ascend 950DT",
   "vendor": "Huawei",
   "date": "2025-09-01",
   "date_precision": "month",
   "value": 4.0,
   "unit": "TB/s",
   "normalized": 6.666666666666667,
   "status": "preliminary",
   "dataset": "chip-corpus",
   "refs": [
    112,
    114
   ],
   "note": "FP16/BF16 peak not disclosed; 2 TB/s UnifiedBus direction unstated, omitted"
  },
  {
   "id": "huawei_ascend_950pr:hbm_tbps",
   "product_id": "huawei_ascend_950pr",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Ascend 950PR",
   "label": "Ascend 950PR",
   "vendor": "Huawei",
   "date": "2025-09-01",
   "date_precision": "month",
   "value": 1.6,
   "unit": "TB/s",
   "normalized": 2.666666666666667,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    112,
    114
   ],
   "note": "chip spec; FP16/BF16 peak not disclosed; 2 TB/s UnifiedBus direction unstated, omitted"
  },
  {
   "id": "nextsilicon_maverick2_oam:hbm_tbps",
   "product_id": "nextsilicon_maverick2_oam",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Maverick-2 (OAM, dual die)",
   "label": "Maverick-2 (OAM, dual die)",
   "vendor": "NextSilicon",
   "date": "2025-10-01",
   "date_precision": "month",
   "value": 6.4,
   "unit": "TB/s",
   "normalized": 10.666666666666668,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    95,
    96
   ],
   "note": ""
  },
  {
   "id": "nextsilicon_maverick2_pcie:hbm_tbps",
   "product_id": "nextsilicon_maverick2_pcie",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Maverick-2 (PCIe, single die)",
   "label": "Maverick-2 (PCIe, single die)",
   "vendor": "NextSilicon",
   "date": "2025-10-01",
   "date_precision": "month",
   "value": 3.2,
   "unit": "TB/s",
   "normalized": 5.333333333333334,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    95,
    96
   ],
   "note": ""
  },
  {
   "id": "ibm_spyre:hbm_tbps",
   "product_id": "ibm_spyre",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Spyre Accelerator",
   "label": "Spyre Accelerator",
   "vendor": "IBM",
   "date": "2025-10-01",
   "date_precision": "month",
   "value": 0.204,
   "unit": "TB/s",
   "normalized": 0.33999999999999997,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    97,
    98
   ],
   "note": "16 LPDDR5 channels at 6.4 Gbps"
  },
  {
   "id": "google_tpu_v7:hbm_tbps",
   "product_id": "google_tpu_v7",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "TPU v7",
   "label": "TPU v7",
   "vendor": "Google",
   "date": "2025-10-01",
   "date_precision": "month",
   "value": 7.37,
   "unit": "TB/s",
   "normalized": 12.283333333333333,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    43
   ],
   "note": ""
  },
  {
   "id": "microsoft_maia_200:hbm_tbps",
   "product_id": "microsoft_maia_200",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Maia 200",
   "label": "Maia 200",
   "vendor": "Microsoft",
   "date": "2026-01-01",
   "date_precision": "month",
   "value": 7.0,
   "unit": "TB/s",
   "normalized": 11.666666666666668,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    62,
    63
   ],
   "note": "HBM3e"
  },
  {
   "id": "nvidia_rubin:hbm_tbps",
   "product_id": "nvidia_rubin",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "Rubin GPU",
   "label": "Rubin GPU",
   "vendor": "NVIDIA",
   "date": "2026-01-01",
   "date_precision": "month",
   "value": 22.0,
   "unit": "TB/s",
   "normalized": 36.66666666666667,
   "status": "preliminary",
   "dataset": "survey-figure",
   "refs": [
    29
   ],
   "note": ""
  },
  {
   "id": "meta_mtia_300:hbm_tbps",
   "product_id": "meta_mtia_300",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MTIA 300",
   "label": "MTIA 300",
   "vendor": "Meta",
   "date": "2026-03-01",
   "date_precision": "month",
   "value": 6.1,
   "unit": "TB/s",
   "normalized": 10.166666666666666,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    58,
    59
   ],
   "note": "HBM3E, read or write"
  },
  {
   "id": "google_tpu_8i:hbm_tbps",
   "product_id": "google_tpu_8i",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "TPU 8i",
   "label": "TPU 8i",
   "vendor": "Google",
   "date": "2026-04-01",
   "date_precision": "month",
   "value": 8.601,
   "unit": "TB/s",
   "normalized": 14.335000000000003,
   "status": "forthcoming",
   "dataset": "survey-figure",
   "refs": [
    44
   ],
   "note": ""
  },
  {
   "id": "google_tpu_8t:hbm_tbps",
   "product_id": "google_tpu_8t",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "TPU 8t",
   "label": "TPU 8t",
   "vendor": "Google",
   "date": "2026-04-01",
   "date_precision": "month",
   "value": 6.528,
   "unit": "TB/s",
   "normalized": 10.879999999999999,
   "status": "forthcoming",
   "dataset": "survey-figure",
   "refs": [
    44
   ],
   "note": ""
  },
  {
   "id": "amd_mi430x:hbm_tbps",
   "product_id": "amd_mi430x",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MI430X",
   "label": "MI430X",
   "vendor": "AMD",
   "date": "2026-07-01",
   "date_precision": "month",
   "value": 23.3,
   "unit": "TB/s",
   "normalized": 38.833333333333336,
   "status": "preliminary",
   "dataset": "chip-corpus",
   "refs": [
    106,
    107
   ],
   "note": ""
  },
  {
   "id": "amd_mi455x:hbm_tbps",
   "product_id": "amd_mi455x",
   "metric": "hbm_tbps",
   "kind": "accelerator",
   "name": "MI455X",
   "label": "MI455X",
   "vendor": "AMD",
   "date": "2026-07-01",
   "date_precision": "month",
   "value": 23.3,
   "unit": "TB/s",
   "normalized": 38.833333333333336,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    35,
    36
   ],
   "note": ""
  },
  {
   "id": "nvidia_p100:hbm_gb",
   "product_id": "nvidia_p100",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "P100",
   "label": "P100",
   "vendor": "NVIDIA",
   "date": "2016-04-01",
   "date_precision": "month",
   "value": 16.0,
   "unit": "GB",
   "normalized": 1.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    21
   ],
   "note": "HBM2"
  },
  {
   "id": "nvidia_v100:hbm_gb",
   "product_id": "nvidia_v100",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "V100",
   "label": "V100",
   "vendor": "NVIDIA",
   "date": "2017-05-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    22
   ],
   "note": "HBM2"
  },
  {
   "id": "google_tpu_v2:hbm_gb",
   "product_id": "google_tpu_v2",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "TPU v2",
   "label": "TPU v2",
   "vendor": "Google",
   "date": "2017-12-01",
   "date_precision": "month",
   "value": 16.0,
   "unit": "GB",
   "normalized": 1.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    37
   ],
   "note": "HBM"
  },
  {
   "id": "huawei_ascend_910:hbm_gb",
   "product_id": "huawei_ascend_910",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Ascend 910",
   "label": "Ascend 910",
   "vendor": "Huawei",
   "date": "2018-10-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    108,
    109,
    110
   ],
   "note": "HBM2, 4 stacks"
  },
  {
   "id": "aws_inferentia1:hbm_gb",
   "product_id": "aws_inferentia1",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Inferentia 1",
   "label": "Inferentia 1",
   "vendor": "AWS",
   "date": "2018-11-01",
   "date_precision": "month",
   "value": 8.0,
   "unit": "GB",
   "normalized": 0.5,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    45,
    46
   ],
   "note": "DDR4, not HBM"
  },
  {
   "id": "amd_mi50:hbm_gb",
   "product_id": "amd_mi50",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MI50",
   "label": "MI50",
   "vendor": "AMD",
   "date": "2018-11-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    30
   ],
   "note": "HBM2"
  },
  {
   "id": "google_tpu_v3:hbm_gb",
   "product_id": "google_tpu_v3",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "TPU v3",
   "label": "TPU v3",
   "vendor": "Google",
   "date": "2018-12-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    38,
    37
   ],
   "note": "HBM2"
  },
  {
   "id": "qualcomm_cloud_ai_100:hbm_gb",
   "product_id": "qualcomm_cloud_ai_100",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Cloud AI 100",
   "label": "Cloud AI 100",
   "vendor": "Qualcomm",
   "date": "2019-04-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    65,
    66
   ],
   "note": "LPDDR4X, single AIC100 SoC"
  },
  {
   "id": "intel_gaudi:hbm_gb",
   "product_id": "intel_gaudi",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Gaudi",
   "label": "Gaudi",
   "vendor": "Intel (Habana)",
   "date": "2019-06-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    115
   ],
   "note": "HBM2; corpus BF16 ~95 TFLOPS is approximate and bandwidth is not listed, both omitted"
  },
  {
   "id": "kunlunxin_kunlun1:hbm_gb",
   "product_id": "kunlunxin_kunlun1",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Kunlun 1 (XPU-K)",
   "label": "Kunlun 1 (XPU-K)",
   "vendor": "Kunlunxin",
   "date": "2019-07-01",
   "date_precision": "year",
   "value": 16.0,
   "unit": "GB",
   "normalized": 1.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    122,
    123
   ],
   "note": "HBM2 (Baidu-era part, Samsung 14nm); corpus FP16 ~64 TFLOPS is approximate and absent from its Hot Chips spec list, omitted"
  },
  {
   "id": "enflame_cloudblazer_t10:hbm_gb",
   "product_id": "enflame_cloudblazer_t10",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "CloudBlazer T10",
   "label": "CloudBlazer T10",
   "vendor": "Enflame",
   "date": "2019-12-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    132,
    133
   ],
   "note": "HBM2 (DTU 1.0, GF 12LP); corpus bandwidth ~512 GB/s approximate, omitted; FP16/BF16 not listed"
  },
  {
   "id": "cambricon_mlu290:hbm_gb",
   "product_id": "cambricon_mlu290",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MLU290-M5",
   "label": "MLU290-M5",
   "vendor": "Cambricon",
   "date": "2020-07-01",
   "date_precision": "year",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    119,
    120,
    121
   ],
   "note": "HBM2; hw file's 256 TFLOPS FP16 conflicts with sidecar (256 INT16 TOPS, no FP16 figure), omitted"
  },
  {
   "id": "nvidia_a100_80gb_sxm:hbm_gb",
   "product_id": "nvidia_a100_80gb_sxm",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "A100 80GB SXM",
   "label": "A100 80GB SXM",
   "vendor": "NVIDIA",
   "date": "2020-11-01",
   "date_precision": "month",
   "value": 80.0,
   "unit": "GB",
   "normalized": 5.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    23,
    24
   ],
   "note": "HBM2e"
  },
  {
   "id": "amd_mi100:hbm_gb",
   "product_id": "amd_mi100",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MI100",
   "label": "MI100",
   "vendor": "AMD",
   "date": "2020-11-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    31
   ],
   "note": "HBM2"
  },
  {
   "id": "aws_trainium1:hbm_gb",
   "product_id": "aws_trainium1",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Trainium 1",
   "label": "Trainium 1",
   "vendor": "AWS",
   "date": "2020-12-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    47,
    48
   ],
   "note": "HBM2e"
  },
  {
   "id": "iluvatar_tiangai_100:hbm_gb",
   "product_id": "iluvatar_tiangai_100",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "TianGai-100 (BI-V100)",
   "label": "TianGai-100 (BI-V100)",
   "vendor": "Iluvatar CoreX",
   "date": "2021-01-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    142,
    143
   ],
   "note": "HBM2 (TSMC 7nm, CoWoS); corpus FP16 and bandwidth figures are estimates, omitted"
  },
  {
   "id": "enflame_cloudblazer_t20:hbm_gb",
   "product_id": "enflame_cloudblazer_t20",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "CloudBlazer T20",
   "label": "CloudBlazer T20",
   "vendor": "Enflame",
   "date": "2021-07-01",
   "date_precision": "year",
   "value": 64.0,
   "unit": "GB",
   "normalized": 4.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    134,
    135
   ],
   "note": "HBM2e x4 (DTU 2.0 training, 9-die MCM); FP16/BF16 not listed (TF32 160 TFLOPS)"
  },
  {
   "id": "kunlunxin_kunlun2_r200:hbm_gb",
   "product_id": "kunlunxin_kunlun2_r200",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Kunlun II (R200/R300)",
   "label": "Kunlun II (R200/R300)",
   "vendor": "Kunlunxin",
   "date": "2021-07-01",
   "date_precision": "year",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    124,
    125
   ],
   "note": "GDDR6"
  },
  {
   "id": "cambricon_mlu370_x8:hbm_gb",
   "product_id": "cambricon_mlu370_x8",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MLU370-X8",
   "label": "MLU370-X8",
   "vendor": "Cambricon",
   "date": "2021-07-01",
   "date_precision": "year",
   "value": 48.0,
   "unit": "GB",
   "normalized": 3.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    119,
    120,
    121
   ],
   "note": "LPDDR5; dual-chip card (2 x Siyuan 370 via MLU-Link), 24 GB per chip; corpus FP16 ~96 TFLOPS is inferred, omitted"
  },
  {
   "id": "stream_computing_p920:hbm_gb",
   "product_id": "stream_computing_p920",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "STCP920 (P920)",
   "label": "STCP920 (P920)",
   "vendor": "Stream Computing",
   "date": "2021-07-01",
   "date_precision": "year",
   "value": 16.0,
   "unit": "GB",
   "normalized": 1.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    154,
    155
   ],
   "note": "LPDDR4X"
  },
  {
   "id": "furiosa_warboy:hbm_gb",
   "product_id": "furiosa_warboy",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Warboy",
   "label": "Warboy",
   "vendor": "FuriosaAI",
   "date": "2021-07-01",
   "date_precision": "year",
   "value": 16.0,
   "unit": "GB",
   "normalized": 1.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    89
   ],
   "note": "LPDDR4X"
  },
  {
   "id": "vastai_va1:hbm_gb",
   "product_id": "vastai_va1",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "载天 VA1",
   "label": "载天 VA1",
   "vendor": "VastaiTech",
   "date": "2021-07-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    147,
    148
   ],
   "note": "memory type and bandwidth not disclosed; launch spec (a 16 GB SKU = 2 dies x 8 GB also exists); INT8-only peak (>200 TOPS)"
  },
  {
   "id": "esperanto_et_soc_1:hbm_gb",
   "product_id": "esperanto_et_soc_1",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "ET-SoC-1",
   "label": "ET-SoC-1",
   "vendor": "Esperanto Technologies",
   "date": "2021-08-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    92,
    93
   ],
   "note": "LPDDR4x per chip; bandwidth figure in the corpus is marked estimated and is omitted"
  },
  {
   "id": "amd_mi250x:hbm_gb",
   "product_id": "amd_mi250x",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MI250X",
   "label": "MI250X",
   "vendor": "AMD",
   "date": "2021-11-01",
   "date_precision": "month",
   "value": 128.0,
   "unit": "GB",
   "normalized": 8.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    32
   ],
   "note": "HBM2e"
  },
  {
   "id": "google_tpu_v4:hbm_gb",
   "product_id": "google_tpu_v4",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "TPU v4",
   "label": "TPU v4",
   "vendor": "Google",
   "date": "2021-12-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    39
   ],
   "note": "HBM2e"
  },
  {
   "id": "tenstorrent_wormhole:hbm_gb",
   "product_id": "tenstorrent_wormhole",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Wormhole (n150/n300)",
   "label": "Wormhole (n150/n300)",
   "vendor": "Tenstorrent",
   "date": "2022-02-01",
   "date_precision": "month",
   "value": 12.0,
   "unit": "GB",
   "normalized": 0.75,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    79,
    80
   ],
   "note": "GDDR6, per chip; n300 board carries 2 chips (24 GB per board)"
  },
  {
   "id": "intel_gaudi2:hbm_gb",
   "product_id": "intel_gaudi2",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Gaudi2",
   "label": "Gaudi2",
   "vendor": "Intel (Habana)",
   "date": "2022-05-01",
   "date_precision": "month",
   "value": 96.0,
   "unit": "GB",
   "normalized": 6.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    116,
    117
   ],
   "note": "HBM2e, 6 stacks; corpus BF16 ~432 TFLOPS is approximate, omitted"
  },
  {
   "id": "rebellions_atom:hbm_gb",
   "product_id": "rebellions_atom",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "ATOM",
   "label": "ATOM",
   "vendor": "Rebellions",
   "date": "2022-07-01",
   "date_precision": "year",
   "value": 16.0,
   "unit": "GB",
   "normalized": 1.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    86,
    87
   ],
   "note": "GDDR6"
  },
  {
   "id": "huawei_ascend_910b:hbm_gb",
   "product_id": "huawei_ascend_910b",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Ascend 910B",
   "label": "Ascend 910B",
   "vendor": "Huawei",
   "date": "2022-07-01",
   "date_precision": "year",
   "value": 64.0,
   "unit": "GB",
   "normalized": 4.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    111,
    110
   ],
   "note": "HBM2e"
  },
  {
   "id": "iluvatar_tiangai_150:hbm_gb",
   "product_id": "iluvatar_tiangai_150",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "TianGai-150 (BI-V150)",
   "label": "TianGai-150 (BI-V150)",
   "vendor": "Iluvatar CoreX",
   "date": "2022-07-01",
   "date_precision": "year",
   "value": 64.0,
   "unit": "GB",
   "normalized": 4.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    144,
    142
   ],
   "note": "HBM2; corpus FP16 and bandwidth figures are estimates, omitted"
  },
  {
   "id": "nvidia_h100:hbm_gb",
   "product_id": "nvidia_h100",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "H100",
   "label": "H100",
   "vendor": "NVIDIA",
   "date": "2022-09-01",
   "date_precision": "month",
   "value": 80.0,
   "unit": "GB",
   "normalized": 5.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    25
   ],
   "note": "HBM3"
  },
  {
   "id": "aws_inferentia2:hbm_gb",
   "product_id": "aws_inferentia2",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Inferentia 2",
   "label": "Inferentia 2",
   "vendor": "AWS",
   "date": "2022-11-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    49,
    50
   ],
   "note": "HBM2e"
  },
  {
   "id": "meta_mtia_v1:hbm_gb",
   "product_id": "meta_mtia_v1",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MTIA v1",
   "label": "MTIA v1",
   "vendor": "Meta",
   "date": "2023-05-01",
   "date_precision": "month",
   "value": 64.0,
   "unit": "GB",
   "normalized": 4.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    55
   ],
   "note": "LPDDR5"
  },
  {
   "id": "google_tpu_v5e:hbm_gb",
   "product_id": "google_tpu_v5e",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "TPU v5e",
   "label": "TPU v5e",
   "vendor": "Google",
   "date": "2023-08-01",
   "date_precision": "month",
   "value": 16.0,
   "unit": "GB",
   "normalized": 1.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    40
   ],
   "note": "HBM2e"
  },
  {
   "id": "sambanova_sn40l:hbm_gb",
   "product_id": "sambanova_sn40l",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Cardinal SN40L",
   "label": "Cardinal SN40L",
   "vendor": "SambaNova",
   "date": "2023-09-01",
   "date_precision": "month",
   "value": 64.0,
   "unit": "GB",
   "normalized": 4.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    84,
    85
   ],
   "note": "64 GiB HBM per RDU as stated by the vendor (kept as 64 for consistency with other vendors' GB figures)"
  },
  {
   "id": "qualcomm_cloud_ai_100_ultra:hbm_gb",
   "product_id": "qualcomm_cloud_ai_100_ultra",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Cloud AI 100 Ultra",
   "label": "Cloud AI 100 Ultra",
   "vendor": "Qualcomm",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 128.0,
   "unit": "GB",
   "normalized": 8.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    67,
    68,
    69
   ],
   "note": "LPDDR4X per Ultra card (4 AIC100 SoCs behind a PCIe switch, sold as one accelerator card); 870 TOPS INT8, FP16 peak not stated"
  },
  {
   "id": "nvidia_h200:hbm_gb",
   "product_id": "nvidia_h200",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "H200",
   "label": "H200",
   "vendor": "NVIDIA",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 141.0,
   "unit": "GB",
   "normalized": 8.8125,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    101,
    102
   ],
   "note": "HBM3e, 6 stacks"
  },
  {
   "id": "pfn_mn_core_2:hbm_gb",
   "product_id": "pfn_mn_core_2",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MN-Core 2",
   "label": "MN-Core 2",
   "vendor": "Preferred Networks",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 16.0,
   "unit": "GB",
   "normalized": 1.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    99,
    100
   ],
   "note": "GDDR6-class, not HBM; manual says 16 GiB, HC36 slide says 16 GB"
  },
  {
   "id": "microsoft_maia_100:hbm_gb",
   "product_id": "microsoft_maia_100",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Maia 100",
   "label": "Maia 100",
   "vendor": "Microsoft",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 64.0,
   "unit": "GB",
   "normalized": 4.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    60,
    61
   ],
   "note": "HBM2e, 4 stacks"
  },
  {
   "id": "aws_trainium2:hbm_gb",
   "product_id": "aws_trainium2",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Trainium 2",
   "label": "Trainium 2",
   "vendor": "AWS",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 96.0,
   "unit": "GB",
   "normalized": 6.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    51,
    52
   ],
   "note": "HBM3"
  },
  {
   "id": "amd_mi300a:hbm_gb",
   "product_id": "amd_mi300a",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MI300A",
   "label": "MI300A",
   "vendor": "AMD",
   "date": "2023-12-01",
   "date_precision": "month",
   "value": 128.0,
   "unit": "GB",
   "normalized": 8.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    103,
    104
   ],
   "note": "HBM3, unified CPU+GPU pool (APU: 24 Zen 4 cores + 228 CUs); corpus gives no BF16 or bandwidth figure"
  },
  {
   "id": "amd_mi300x:hbm_gb",
   "product_id": "amd_mi300x",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MI300X",
   "label": "MI300X",
   "vendor": "AMD",
   "date": "2023-12-01",
   "date_precision": "month",
   "value": 192.0,
   "unit": "GB",
   "normalized": 12.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    33
   ],
   "note": "HBM3"
  },
  {
   "id": "google_tpu_v5p:hbm_gb",
   "product_id": "google_tpu_v5p",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "TPU v5p",
   "label": "TPU v5p",
   "vendor": "Google",
   "date": "2023-12-01",
   "date_precision": "month",
   "value": 96.0,
   "unit": "GB",
   "normalized": 6.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    41
   ],
   "note": "HBM2e; Google's documentation lists 95 GB"
  },
  {
   "id": "intel_gaudi3:hbm_gb",
   "product_id": "intel_gaudi3",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Gaudi3",
   "label": "Gaudi3",
   "vendor": "Intel (Habana)",
   "date": "2024-04-01",
   "date_precision": "month",
   "value": 128.0,
   "unit": "GB",
   "normalized": 8.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    117,
    118
   ],
   "note": "HBM2e, 8 stacks"
  },
  {
   "id": "meta_mtia_v2:hbm_gb",
   "product_id": "meta_mtia_v2",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MTIA v2",
   "label": "MTIA v2",
   "vendor": "Meta",
   "date": "2024-04-01",
   "date_precision": "month",
   "value": 128.0,
   "unit": "GB",
   "normalized": 8.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    56
   ],
   "note": "LPDDR5"
  },
  {
   "id": "mthreads_mtt_s4000:hbm_gb",
   "product_id": "mthreads_mtt_s4000",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MTT S4000",
   "label": "MTT S4000",
   "vendor": "Moore Threads",
   "date": "2024-07-01",
   "date_precision": "year",
   "value": 48.0,
   "unit": "GB",
   "normalized": 3.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    136,
    137
   ],
   "note": "GDDR6, 384-bit"
  },
  {
   "id": "kunlunxin_p800:hbm_gb",
   "product_id": "kunlunxin_p800",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "P800 (XPU-P)",
   "label": "P800 (XPU-P)",
   "vendor": "Kunlunxin",
   "date": "2024-07-01",
   "date_precision": "year",
   "value": 96.0,
   "unit": "GB",
   "normalized": 6.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    126,
    127
   ],
   "note": "HBM3; corpus bandwidth ~1.6 TB/s approximate, omitted; XLINK 200 GB/s is per port with port count undisclosed, omitted"
  },
  {
   "id": "tenstorrent_blackhole:hbm_gb",
   "product_id": "tenstorrent_blackhole",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Blackhole (p150a/p150b)",
   "label": "Blackhole (p150a/p150b)",
   "vendor": "Tenstorrent",
   "date": "2024-08-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    81,
    82,
    83
   ],
   "note": "GDDR6, single chip; p100a variant is 28 GB"
  },
  {
   "id": "furiosa_rngd:hbm_gb",
   "product_id": "furiosa_rngd",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "RNGD",
   "label": "RNGD",
   "vendor": "FuriosaAI",
   "date": "2024-08-01",
   "date_precision": "month",
   "value": 48.0,
   "unit": "GB",
   "normalized": 3.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    90,
    91
   ],
   "note": "HBM3, 2 stacks on CoWoS-S"
  },
  {
   "id": "amd_mi325x:hbm_gb",
   "product_id": "amd_mi325x",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MI325X",
   "label": "MI325X",
   "vendor": "AMD",
   "date": "2024-10-01",
   "date_precision": "month",
   "value": 256.0,
   "unit": "GB",
   "normalized": 16.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    105
   ],
   "note": "HBM3e; AMD Oct-2024 launch spec is 256 GB, corpus carries 288 GB from the June-2024 preview - verify"
  },
  {
   "id": "dmatrix_corsair:hbm_gb",
   "product_id": "dmatrix_corsair",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Corsair",
   "label": "Corsair",
   "vendor": "d-Matrix",
   "date": "2024-11-01",
   "date_precision": "month",
   "value": 256.0,
   "unit": "GB",
   "normalized": 16.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    70,
    71
   ],
   "note": "LPDDR5X capacity tier per Corsair card (2 chips x 4 chiplets, sold as one card); MXINT4/8/16 only so no FP16/BF16; bandwidth given only as ~400 GB/s and skipped"
  },
  {
   "id": "nvidia_b200:hbm_gb",
   "product_id": "nvidia_b200",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "B200",
   "label": "B200",
   "vendor": "NVIDIA",
   "date": "2024-12-01",
   "date_precision": "month",
   "value": 192.0,
   "unit": "GB",
   "normalized": 12.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    26
   ],
   "note": "HBM3e"
  },
  {
   "id": "google_tpu_v6e:hbm_gb",
   "product_id": "google_tpu_v6e",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "TPU v6e",
   "label": "TPU v6e",
   "vendor": "Google",
   "date": "2024-12-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB",
   "normalized": 2.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    42
   ],
   "note": "HBM3"
  },
  {
   "id": "aws_trainium3:hbm_gb",
   "product_id": "aws_trainium3",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Trainium 3",
   "label": "Trainium 3",
   "vendor": "AWS",
   "date": "2024-12-01",
   "date_precision": "month",
   "value": 144.0,
   "unit": "GB",
   "normalized": 9.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    53,
    54
   ],
   "note": "HBM3e"
  },
  {
   "id": "huawei_ascend_910c:hbm_gb",
   "product_id": "huawei_ascend_910c",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Ascend 910C",
   "label": "Ascend 910C",
   "vendor": "Huawei",
   "date": "2025-03-01",
   "date_precision": "month",
   "value": 128.0,
   "unit": "GB",
   "normalized": 8.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    112,
    113,
    110
   ],
   "note": "HBM2e, dual-die MCM (8 stacks); corpus FP16 ~800 TFLOPS and ~1.6 TB/s are approximations, omitted"
  },
  {
   "id": "nvidia_b300:hbm_gb",
   "product_id": "nvidia_b300",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "B300",
   "label": "B300",
   "vendor": "NVIDIA",
   "date": "2025-03-01",
   "date_precision": "month",
   "value": 288.0,
   "unit": "GB",
   "normalized": 18.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    27,
    28
   ],
   "note": "HBM3e"
  },
  {
   "id": "amd_mi355x:hbm_gb",
   "product_id": "amd_mi355x",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MI355X",
   "label": "MI355X",
   "vendor": "AMD",
   "date": "2025-06-01",
   "date_precision": "month",
   "value": 288.0,
   "unit": "GB",
   "normalized": 18.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    34
   ],
   "note": "HBM3e"
  },
  {
   "id": "vastai_va16:hbm_gb",
   "product_id": "vastai_va16",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "载天 VA16",
   "label": "载天 VA16",
   "vendor": "VastaiTech",
   "date": "2025-06-01",
   "date_precision": "month",
   "value": 128.0,
   "unit": "GB",
   "normalized": 8.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    151,
    152,
    153
   ],
   "note": "4 dies x 32 GB per card; memory type, bandwidth and peak FLOPS not disclosed; first public appearance 2025-06 OEM certification, 128 GB disclosed 2026-04"
  },
  {
   "id": "meta_mtia_2i:hbm_gb",
   "product_id": "meta_mtia_2i",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MTIA 2i (MTIA 200)",
   "label": "MTIA 2i (MTIA 200)",
   "vendor": "Meta",
   "date": "2025-07-01",
   "date_precision": "year",
   "value": 128.0,
   "unit": "GB",
   "normalized": 8.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    57,
    58
   ],
   "note": "LPDDR5"
  },
  {
   "id": "metax_mxc600:hbm_gb",
   "product_id": "metax_mxc600",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MXC600 (Xiyun C600)",
   "label": "MXC600 (Xiyun C600)",
   "vendor": "MetaX",
   "date": "2025-07-01",
   "date_precision": "month",
   "value": 144.0,
   "unit": "GB",
   "normalized": 9.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    140,
    141
   ],
   "note": "HBM3e; FP8 1000 TFLOPS is the only disclosed compute figure, FP16 ~500 is an estimate, omitted"
  },
  {
   "id": "xiwang_s2:hbm_gb",
   "product_id": "xiwang_s2",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "S2",
   "label": "S2",
   "vendor": "Xiwang (曦望)",
   "date": "2025-07-01",
   "date_precision": "month",
   "value": 64.0,
   "unit": "GB",
   "normalized": 4.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    145,
    146
   ],
   "note": "memory type not disclosed (CoWoS suggests HBM); bandwidth and peak FLOPS not disclosed"
  },
  {
   "id": "rebellions_rebel_quad:hbm_gb",
   "product_id": "rebellions_rebel_quad",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "REBEL-Quad (Rebel100)",
   "label": "REBEL-Quad (Rebel100)",
   "vendor": "Rebellions",
   "date": "2025-08-01",
   "date_precision": "month",
   "value": 144.0,
   "unit": "GB",
   "normalized": 9.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    88
   ],
   "note": "HBM3e, 4 x 36 GB 12Hi, one 4-die package"
  },
  {
   "id": "huawei_ascend_950dt:hbm_gb",
   "product_id": "huawei_ascend_950dt",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Ascend 950DT",
   "label": "Ascend 950DT",
   "vendor": "Huawei",
   "date": "2025-09-01",
   "date_precision": "month",
   "value": 144.0,
   "unit": "GB",
   "normalized": 9.0,
   "status": "preliminary",
   "dataset": "chip-corpus",
   "refs": [
    112,
    114
   ],
   "note": "HiZQ 2.0 in-house HBM-class memory; Q4 2026 release"
  },
  {
   "id": "huawei_ascend_950pr:hbm_gb",
   "product_id": "huawei_ascend_950pr",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Ascend 950PR",
   "label": "Ascend 950PR",
   "vendor": "Huawei",
   "date": "2025-09-01",
   "date_precision": "month",
   "value": 128.0,
   "unit": "GB",
   "normalized": 8.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    112,
    114
   ],
   "note": "HiBL 1.0 in-house HBM-class memory (chip spec); Atlas 350 shipping card derated to up to 112 GB / 1.4 TB/s"
  },
  {
   "id": "nextsilicon_maverick2_oam:hbm_gb",
   "product_id": "nextsilicon_maverick2_oam",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Maverick-2 (OAM, dual die)",
   "label": "Maverick-2 (OAM, dual die)",
   "vendor": "NextSilicon",
   "date": "2025-10-01",
   "date_precision": "month",
   "value": 192.0,
   "unit": "GB",
   "normalized": 12.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    95,
    96
   ],
   "note": "HBM3E, dual-die OAM module"
  },
  {
   "id": "nextsilicon_maverick2_pcie:hbm_gb",
   "product_id": "nextsilicon_maverick2_pcie",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Maverick-2 (PCIe, single die)",
   "label": "Maverick-2 (PCIe, single die)",
   "vendor": "NextSilicon",
   "date": "2025-10-01",
   "date_precision": "month",
   "value": 96.0,
   "unit": "GB",
   "normalized": 6.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    95,
    96
   ],
   "note": "HBM3E"
  },
  {
   "id": "ibm_spyre:hbm_gb",
   "product_id": "ibm_spyre",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Spyre Accelerator",
   "label": "Spyre Accelerator",
   "vendor": "IBM",
   "date": "2025-10-01",
   "date_precision": "month",
   "value": 128.0,
   "unit": "GB",
   "normalized": 8.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    97,
    98
   ],
   "note": "LPDDR5 on the PCIe card, not HBM"
  },
  {
   "id": "google_tpu_v7:hbm_gb",
   "product_id": "google_tpu_v7",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "TPU v7",
   "label": "TPU v7",
   "vendor": "Google",
   "date": "2025-10-01",
   "date_precision": "month",
   "value": 192.0,
   "unit": "GB",
   "normalized": 12.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    43
   ],
   "note": "HBM3e"
  },
  {
   "id": "dmatrix_raptor:hbm_gb",
   "product_id": "dmatrix_raptor",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Raptor",
   "label": "Raptor",
   "vendor": "d-Matrix",
   "date": "2025-11-01",
   "date_precision": "month",
   "value": 128.0,
   "unit": "GB",
   "normalized": 8.0,
   "status": "preliminary",
   "dataset": "chip-corpus",
   "refs": [
    72
   ],
   "note": "8 on-package LPDDR5X-9600 devices per MCM (secondary tier); primary 3D-DRAM tier capacity not disclosed; peak TFLOPS not disclosed"
  },
  {
   "id": "microsoft_maia_200:hbm_gb",
   "product_id": "microsoft_maia_200",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Maia 200",
   "label": "Maia 200",
   "vendor": "Microsoft",
   "date": "2026-01-01",
   "date_precision": "month",
   "value": 216.0,
   "unit": "GB",
   "normalized": 13.5,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    62,
    63
   ],
   "note": "HBM3e; only FP4/FP8 peaks disclosed, no BF16"
  },
  {
   "id": "nvidia_rubin:hbm_gb",
   "product_id": "nvidia_rubin",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Rubin GPU",
   "label": "Rubin GPU",
   "vendor": "NVIDIA",
   "date": "2026-01-01",
   "date_precision": "month",
   "value": 288.0,
   "unit": "GB",
   "normalized": 18.0,
   "status": "preliminary",
   "dataset": "survey-figure",
   "refs": [
    29
   ],
   "note": "HBM4"
  },
  {
   "id": "alibaba_zhenwu_810e:hbm_gb",
   "product_id": "alibaba_zhenwu_810e",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Zhenwu 810E (PPU)",
   "label": "Zhenwu 810E (PPU)",
   "vendor": "Alibaba (T-Head)",
   "date": "2026-01-01",
   "date_precision": "month",
   "value": 96.0,
   "unit": "GB",
   "normalized": 6.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    128,
    129
   ],
   "note": "HBM2e; peak FLOPS not disclosed; 700 GB/s inter-chip (7 ICN links) direction unstated, omitted; PPU shown on CCTV 2025-09"
  },
  {
   "id": "meta_mtia_300:hbm_gb",
   "product_id": "meta_mtia_300",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MTIA 300",
   "label": "MTIA 300",
   "vendor": "Meta",
   "date": "2026-03-01",
   "date_precision": "month",
   "value": 216.0,
   "unit": "GB",
   "normalized": 13.5,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    58,
    59
   ],
   "note": "HBM3E, 6 stacks"
  },
  {
   "id": "google_tpu_8i:hbm_gb",
   "product_id": "google_tpu_8i",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "TPU 8i",
   "label": "TPU 8i",
   "vendor": "Google",
   "date": "2026-04-01",
   "date_precision": "month",
   "value": 288.0,
   "unit": "GB",
   "normalized": 18.0,
   "status": "forthcoming",
   "dataset": "survey-figure",
   "refs": [
    44
   ],
   "note": "HBM3e"
  },
  {
   "id": "google_tpu_8t:hbm_gb",
   "product_id": "google_tpu_8t",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "TPU 8t",
   "label": "TPU 8t",
   "vendor": "Google",
   "date": "2026-04-01",
   "date_precision": "month",
   "value": 216.0,
   "unit": "GB",
   "normalized": 13.5,
   "status": "forthcoming",
   "dataset": "survey-figure",
   "refs": [
    44
   ],
   "note": "HBM3e"
  },
  {
   "id": "alibaba_zhenwu_m890:hbm_gb",
   "product_id": "alibaba_zhenwu_m890",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "Zhenwu M890",
   "label": "Zhenwu M890",
   "vendor": "Alibaba (T-Head)",
   "date": "2026-05-01",
   "date_precision": "month",
   "value": 144.0,
   "unit": "GB",
   "normalized": 9.0,
   "status": "preliminary",
   "dataset": "chip-corpus",
   "refs": [
    130,
    131
   ],
   "note": "Alibaba wording is 144 GB 'on-chip memory'; type (reported HBM) not vendor-confirmed; bandwidth and FLOPS not disclosed; 800 GB/s inter-chip direction unstated, omitted"
  },
  {
   "id": "amd_mi430x:hbm_gb",
   "product_id": "amd_mi430x",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MI430X",
   "label": "MI430X",
   "vendor": "AMD",
   "date": "2026-07-01",
   "date_precision": "month",
   "value": 432.0,
   "unit": "GB",
   "normalized": 27.0,
   "status": "preliminary",
   "dataset": "chip-corpus",
   "refs": [
    106,
    107
   ],
   "note": "HBM4, 12 stacks; HPC/sovereign SKU (up to 288 TFLOPS FP64), BF16 not disclosed; availability H1 2027"
  },
  {
   "id": "amd_mi455x:hbm_gb",
   "product_id": "amd_mi455x",
   "metric": "hbm_gb",
   "kind": "accelerator",
   "name": "MI455X",
   "label": "MI455X",
   "vendor": "AMD",
   "date": "2026-07-01",
   "date_precision": "month",
   "value": 432.0,
   "unit": "GB",
   "normalized": 27.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    35,
    36
   ],
   "note": "HBM4"
  },
  {
   "id": "nvidia_p100:scaleup_gbps",
   "product_id": "nvidia_p100",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "P100",
   "label": "NVLink 1 (P100)",
   "vendor": "NVIDIA",
   "date": "2016-04-01",
   "date_precision": "month",
   "value": 160.0,
   "unit": "GB/s",
   "normalized": 0.5333333333333333,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    21
   ],
   "note": "4 NVLink 1 links, 160 GB/s aggregate bidirectional"
  },
  {
   "id": "nvidia_v100:scaleup_gbps",
   "product_id": "nvidia_v100",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "V100",
   "label": "NVLink 2",
   "vendor": "NVIDIA",
   "date": "2017-12-01",
   "date_precision": "month",
   "value": 300.0,
   "unit": "GB/s",
   "normalized": 1.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    22
   ],
   "note": "6 NVLink 2 links, 300 GB/s aggregate bidirectional per GPU (Figure 2 date convention)"
  },
  {
   "id": "aws_inferentia1:scaleup_gbps",
   "product_id": "aws_inferentia1",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "Inferentia 1",
   "label": "Inferentia 1",
   "vendor": "AWS",
   "date": "2018-11-01",
   "date_precision": "month",
   "value": 32.0,
   "unit": "GB/s",
   "normalized": 0.10666666666666667,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    45,
    46
   ],
   "note": "NeuronLink v1 ring, aggregate bidirectional per chip"
  },
  {
   "id": "amd_mi50:scaleup_gbps",
   "product_id": "amd_mi50",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "MI50",
   "label": "MI50",
   "vendor": "AMD",
   "date": "2018-11-01",
   "date_precision": "month",
   "value": 200.0,
   "unit": "GB/s",
   "normalized": 0.6666666666666666,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    30
   ],
   "note": "Infinity Fabric links, ring topology; aggregate bidirectional per GPU"
  },
  {
   "id": "amd_mi100:scaleup_gbps",
   "product_id": "amd_mi100",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "MI100",
   "label": "MI100",
   "vendor": "AMD",
   "date": "2020-11-01",
   "date_precision": "month",
   "value": 276.0,
   "unit": "GB/s",
   "normalized": 0.92,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    31
   ],
   "note": "3 Infinity Fabric links, aggregate bidirectional per GPU"
  },
  {
   "id": "nvidia_a100_80gb_sxm:scaleup_gbps",
   "product_id": "nvidia_a100_80gb_sxm",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "A100 80GB SXM",
   "label": "NVLink 3",
   "vendor": "NVIDIA",
   "date": "2020-12-01",
   "date_precision": "month",
   "value": 600.0,
   "unit": "GB/s",
   "normalized": 2.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    23,
    24
   ],
   "note": "12 NVLink 3 links, 600 GB/s aggregate bidirectional per GPU"
  },
  {
   "id": "aws_trainium1:scaleup_gbps",
   "product_id": "aws_trainium1",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "Trainium 1",
   "label": "Trainium 1",
   "vendor": "AWS",
   "date": "2020-12-01",
   "date_precision": "month",
   "value": 384.0,
   "unit": "GB/s",
   "normalized": 1.28,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    47,
    48
   ],
   "note": "NeuronLink v2, 2D torus; aggregate bidirectional per chip"
  },
  {
   "id": "enflame_cloudblazer_t20:scaleup_gbps",
   "product_id": "enflame_cloudblazer_t20",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "CloudBlazer T20",
   "label": "CloudBlazer T20",
   "vendor": "Enflame",
   "date": "2021-07-01",
   "date_precision": "year",
   "value": 300.0,
   "unit": "GB/s",
   "normalized": 1.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    134,
    135
   ],
   "note": "GCU-LARE 2.0, stated bidirectional for T20-class parts"
  },
  {
   "id": "amd_mi250x:scaleup_gbps",
   "product_id": "amd_mi250x",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "MI250X",
   "label": "MI250X",
   "vendor": "AMD",
   "date": "2021-11-01",
   "date_precision": "month",
   "value": 800.0,
   "unit": "GB/s",
   "normalized": 2.6666666666666665,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    32
   ],
   "note": "8 Infinity Fabric links, aggregate bidirectional per package"
  },
  {
   "id": "google_tpu_v4:scaleup_gbps",
   "product_id": "google_tpu_v4",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "TPU v4",
   "label": "TPU v4",
   "vendor": "Google",
   "date": "2021-12-01",
   "date_precision": "month",
   "value": 300.0,
   "unit": "GB/s",
   "normalized": 1.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    39
   ],
   "note": "ICI, 3D torus; aggregate bidirectional per chip"
  },
  {
   "id": "aws_inferentia2:scaleup_gbps",
   "product_id": "aws_inferentia2",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "Inferentia 2",
   "label": "Inferentia 2",
   "vendor": "AWS",
   "date": "2022-11-01",
   "date_precision": "month",
   "value": 192.0,
   "unit": "GB/s",
   "normalized": 0.64,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    49,
    50
   ],
   "note": "NeuronLink v2 ring; aggregate bidirectional per chip"
  },
  {
   "id": "nvidia_h100:scaleup_gbps",
   "product_id": "nvidia_h100",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "H100",
   "label": "NVLink 4",
   "vendor": "NVIDIA",
   "date": "2022-12-01",
   "date_precision": "month",
   "value": 900.0,
   "unit": "GB/s",
   "normalized": 3.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    25
   ],
   "note": "18 NVLink 4 links, 900 GB/s aggregate bidirectional per GPU"
  },
  {
   "id": "google_tpu_v5e:scaleup_gbps",
   "product_id": "google_tpu_v5e",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "TPU v5e",
   "label": "TPU v5e",
   "vendor": "Google",
   "date": "2023-08-01",
   "date_precision": "month",
   "value": 400.0,
   "unit": "GB/s",
   "normalized": 1.3333333333333333,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    40
   ],
   "note": "ICI, 2D torus; aggregate bidirectional per chip"
  },
  {
   "id": "nvidia_h200:scaleup_gbps",
   "product_id": "nvidia_h200",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "H200",
   "label": "H200",
   "vendor": "NVIDIA",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 900.0,
   "unit": "GB/s",
   "normalized": 3.0,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    101,
    102
   ],
   "note": "NVLink 4 (18 links x 50 GB/s), vendor-stated bidirectional per GPU"
  },
  {
   "id": "aws_trainium2:scaleup_gbps",
   "product_id": "aws_trainium2",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "Trainium 2",
   "label": "Trainium 2",
   "vendor": "AWS",
   "date": "2023-11-01",
   "date_precision": "month",
   "value": 1280.0,
   "unit": "GB/s",
   "normalized": 4.266666666666667,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    51,
    52
   ],
   "note": "NeuronLink v3: 1024 GB/s intra-instance 2D torus + 256 GB/s inter-instance links; aggregate bidirectional per chip"
  },
  {
   "id": "amd_mi300x:scaleup_gbps",
   "product_id": "amd_mi300x",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "MI300X",
   "label": "MI300X",
   "vendor": "AMD",
   "date": "2023-12-01",
   "date_precision": "month",
   "value": 896.0,
   "unit": "GB/s",
   "normalized": 2.986666666666667,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    33
   ],
   "note": "7 Infinity Fabric (XGMI) links x 128 GB/s, aggregate bidirectional per GPU"
  },
  {
   "id": "google_tpu_v5p:scaleup_gbps",
   "product_id": "google_tpu_v5p",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "TPU v5p",
   "label": "TPU v5p",
   "vendor": "Google",
   "date": "2023-12-01",
   "date_precision": "month",
   "value": 1200.0,
   "unit": "GB/s",
   "normalized": 4.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    41
   ],
   "note": "ICI, 3D torus; aggregate bidirectional per chip"
  },
  {
   "id": "intel_gaudi3:scaleup_gbps",
   "product_id": "intel_gaudi3",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "Gaudi3",
   "label": "Gaudi3",
   "vendor": "Intel (Habana)",
   "date": "2024-04-01",
   "date_precision": "month",
   "value": 1050.0,
   "unit": "GB/s",
   "normalized": 3.5,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    117,
    118
   ],
   "note": "21 x 200 GbE RoCE v2 scale-up ports; corpus states 4.2 Tbps unidirectional -> doubled to 8.4 Tbps, /8 = 1050 GB/s"
  },
  {
   "id": "amd_mi325x:scaleup_gbps",
   "product_id": "amd_mi325x",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "MI325X",
   "label": "MI325X",
   "vendor": "AMD",
   "date": "2024-10-01",
   "date_precision": "month",
   "value": 896.0,
   "unit": "GB/s",
   "normalized": 2.986666666666667,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    105
   ],
   "note": "7 XGMI links x 128 GB/s bidirectional, 8-GPU mesh (CDNA3 platform)"
  },
  {
   "id": "nvidia_b200:scaleup_gbps",
   "product_id": "nvidia_b200",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "B200",
   "label": "NVLink 5",
   "vendor": "NVIDIA",
   "date": "2024-12-01",
   "date_precision": "month",
   "value": 1800.0,
   "unit": "GB/s",
   "normalized": 6.0,
   "status": "released",
   "dataset": "survey-figure",
   "refs": [
    26
   ],
   "note": "18 NVLink 5 links, 1.8 TB/s aggregate bidirectional per GPU"
  },
  {
   "id": "google_tpu_v6e:scaleup_gbps",
   "product_id": "google_tpu_v6e",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "TPU v6e",
   "label": "TPU v6e",
   "vendor": "Google",
   "date": "2024-12-01",
   "date_precision": "month",
   "value": 800.0,
   "unit": "GB/s",
   "normalized": 2.6666666666666665,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    42
   ],
   "note": "ICI, 2D torus; aggregate bidirectional per chip"
  },
  {
   "id": "aws_trainium3:scaleup_gbps",
   "product_id": "aws_trainium3",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "Trainium 3",
   "label": "Trainium 3",
   "vendor": "AWS",
   "date": "2024-12-01",
   "date_precision": "month",
   "value": 2560.0,
   "unit": "GB/s",
   "normalized": 8.533333333333333,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    53,
    54
   ],
   "note": "NeuronLink v4 + NeuronSwitch-v1 all-to-all; aggregate bidirectional per chip"
  },
  {
   "id": "nvidia_b300:scaleup_gbps",
   "product_id": "nvidia_b300",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "B300",
   "label": "B300",
   "vendor": "NVIDIA",
   "date": "2025-03-01",
   "date_precision": "month",
   "value": 1800.0,
   "unit": "GB/s",
   "normalized": 6.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    27,
    28
   ],
   "note": "NVLink 5, 1.8 TB/s aggregate bidirectional per GPU"
  },
  {
   "id": "amd_mi355x:scaleup_gbps",
   "product_id": "amd_mi355x",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "MI355X",
   "label": "MI355X",
   "vendor": "AMD",
   "date": "2025-06-01",
   "date_precision": "month",
   "value": 1075.0,
   "unit": "GB/s",
   "normalized": 3.5833333333333335,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    34
   ],
   "note": "Infinity Fabric links, aggregate bidirectional per GPU"
  },
  {
   "id": "google_tpu_v7:scaleup_gbps",
   "product_id": "google_tpu_v7",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "TPU v7",
   "label": "TPU v7",
   "vendor": "Google",
   "date": "2025-10-01",
   "date_precision": "month",
   "value": 1200.0,
   "unit": "GB/s",
   "normalized": 4.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    43
   ],
   "note": "ICI, 3D torus; aggregate bidirectional per chip"
  },
  {
   "id": "microsoft_maia_200:scaleup_gbps",
   "product_id": "microsoft_maia_200",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "Maia 200",
   "label": "Maia 200",
   "vendor": "Microsoft",
   "date": "2026-01-01",
   "date_precision": "month",
   "value": 2800.0,
   "unit": "GB/s",
   "normalized": 9.333333333333334,
   "status": "released",
   "dataset": "chip-corpus",
   "refs": [
    62,
    63
   ],
   "note": "on-die NIC, 2.8 TB/s stated bidirectional; TB/s to GB/s x1000"
  },
  {
   "id": "nvidia_rubin:scaleup_gbps",
   "product_id": "nvidia_rubin",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "Rubin GPU",
   "label": "NVLink 6",
   "vendor": "NVIDIA",
   "date": "2026-01-01",
   "date_precision": "month",
   "value": 3600.0,
   "unit": "GB/s",
   "normalized": 12.0,
   "status": "preliminary",
   "dataset": "survey-figure",
   "refs": [
    29
   ],
   "note": "NVLink 6, 3.6 TB/s aggregate bidirectional per GPU, preliminary"
  },
  {
   "id": "google_tpu_8i:scaleup_gbps",
   "product_id": "google_tpu_8i",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "TPU 8i",
   "label": "TPU 8i",
   "vendor": "Google",
   "date": "2026-04-01",
   "date_precision": "month",
   "value": 1920.0,
   "unit": "GB/s",
   "normalized": 6.4,
   "status": "forthcoming",
   "dataset": "survey-table",
   "refs": [
    44
   ],
   "note": "ICI, Boardfly topology; aggregate bidirectional per chip"
  },
  {
   "id": "google_tpu_8t:scaleup_gbps",
   "product_id": "google_tpu_8t",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "TPU 8t",
   "label": "TPU 8t",
   "vendor": "Google",
   "date": "2026-04-01",
   "date_precision": "month",
   "value": 1920.0,
   "unit": "GB/s",
   "normalized": 6.4,
   "status": "forthcoming",
   "dataset": "survey-table",
   "refs": [
    44
   ],
   "note": "ICI, 3D torus; aggregate bidirectional per chip"
  },
  {
   "id": "amd_mi455x:scaleup_gbps",
   "product_id": "amd_mi455x",
   "metric": "scaleup_gbps",
   "kind": "accelerator",
   "name": "MI455X",
   "label": "MI455X",
   "vendor": "AMD",
   "date": "2026-07-01",
   "date_precision": "month",
   "value": 3600.0,
   "unit": "GB/s",
   "normalized": 12.0,
   "status": "released",
   "dataset": "survey-table",
   "refs": [
    35,
    36
   ],
   "note": "UALink over Ethernet (UALoE), 3.6 TB/s aggregate bidirectional per GPU"
  }
 ],
 "survey_figure_growth": {
  "params_b": {
   "pct": 248.2,
   "start": "GPT",
   "end": "Kimi K3"
  },
  "bf16_tflops": {
   "pct": 72.7,
   "start": "TPU v2",
   "end": "MI455X"
  },
  "hbm_tbps": {
   "pct": 53.2,
   "start": "TPU v2",
   "end": "MI455X"
  },
  "hbm_gb": {
   "pct": 46.8,
   "start": "TPU v2",
   "end": "MI455X"
  },
  "scaleup_gbps": {
   "pct": 36.0,
   "start": "V100",
   "end": "Rubin GPU"
  }
 }
};
