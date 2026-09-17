# AI Architecture and Systems Tutorial

*A topic map from GEMM execution to datacenter-scale AI, centered on generality, specialization, and data movement.*

**Revision:** 2026-09-16 · **Curriculum status:** planned topics

This outline connects six layers: **Microarchitecture → Kernel → Compiler → Architecture → System → Algorithms**. Hardware chapters follow the supplied survey, *Balancing Generality and Specialization: A Survey on AI Datacenter Hardware Architecture*, and the [AI Datacenter Accelerator Research Corpus][corpus]. Kernel, compiler, and runtime comparisons use the corpus’s per-chip software mappings. The broader systems and algorithms topics are carried forward from the original outline, with [Awesome-ML-SYS-Tutorial][awesome] as a systems reading index.

| Module | Primary question | Scope |
|---|---|---|
| [1. Microarchitecture](#microarchitecture) | How does GEMM execute inside an accelerator? | PE, systolic array, memory hierarchy, dataflow, roofline, and operand delivery. |
| [2. Kernel](#kernel) | How are operators implemented efficiently? | Layout, tiling, pipelines, matrix instructions, libraries, and device-specific kernel programming. |
| [3. Compiler](#compiler) | How does a model become an executable device program? | Graph/IR lowering, scheduling, memory planning, placement/routing, and executable artifacts. |
| [4. Architecture](#architecture) | How are hardware resources organized? | Accelerator taxonomy, programming models, fabrics, generations, power/cooling, and design challenges. |
| [5. System](#system) | How are workloads executed and operated? | Distributed training, serving, post-training, runtimes, heterogeneous fleets, and production infrastructure. |
| [6. Algorithms](#algorithms) | What computation does the model require? | Model structures, training objectives, generation, compression, and model-family evolution. |

<details>
<summary><strong>Source map and scope</strong></summary>

**Survey.** Yufeng Gu, Jiazhen Wang, and Reetuparna Das, September 2026, supplied 34-page draft. “Survey §…” and figure references refer to that attachment. [Companion project page][survey-project].

**Corpus.** Platform links are pinned to [commit `c49a55c6cdbb`][corpus-commit]. Per-chip records distinguish confirmed, inferred, contested, nonpublic, historical, and announced information. Those qualifications remain relevant when developing the corresponding chapters.

**Core and extensions.** The survey’s core taxonomy is GPU, NPU, Spatial Dataflow, and Compute-in-Memory. Additional vendor cases, photonic/neuromorphic comparisons, and CXL/HBF topics are labeled extensions. Untagged foundations and the detailed systems/algorithms curriculum are retained topics, rather than findings attributed to the hardware survey.

**Cross-layer boundaries.** Numerical hardware support, quantized kernels, compiler transformations, deployment policy, and quantization algorithms are separate topics. Likewise, collective semantics, communication algorithms, and physical topology are separated. A physical server/rack/pod need not coincide with a scale-up domain.

</details>

<a id="microarchitecture"></a>

## 1. Microarchitecture

> Survey alignment: §3.1–§3.2 and §5.1–§5.2. The GEMM, roofline, circuit, and RTL foundations remain the introductory curriculum.

### 1.1 From GEMM to AI Accelerators

#### 1.1.1 Scalar Multiply-Add, Dot Product, Matrix Multiplication, and Tensor Contraction

#### 1.1.2 GEMM, GEMV, Batched GEMM, and Operator Shapes

#### 1.1.3 Computation Graphs for Forward Pass, Backward Pass, and Parameter Update

#### 1.1.4 Compute Volume, Data Volume, Data Reuse, and Working Set

#### 1.1.5 Latency, Throughput, Bandwidth, Capacity, and Energy

#### 1.1.6 Execution Hierarchy from Processing Element to Chip

### 1.2 Numerical Representation, Arithmetic Circuits, and Precision Contracts

<sub>Sources: Survey §5.1, Fig. 10; foundational circuit topics retained from the original outline.</sub>

#### 1.2.1 Standard Floating-Point Formats: FP64, FP32, and FP16

#### 1.2.2 AI-Oriented Formats: BF16, TF32, and FP8

#### 1.2.3 Integer Arithmetic and Quantized Data Types: INT8/INT4

#### 1.2.4 Block Scaling: MXFP8/MXFP6/MXFP4 and NVFP4

#### 1.2.5 Multipliers, Adders, FMA, and Accumulators

#### 1.2.6 Separate Precision Conventions for Input, Multiply, Accumulate, and Output

#### 1.2.7 Rounding, Overflow, Underflow, Scale Overhead, and Numerical Error

#### 1.2.8 Low-Precision Arithmetic, Structured Sparsity, and Effective Data Bandwidth

### 1.3 Execution Organization: SIMT, Heterogeneous Engines, and Spatial Execution

<sub>Sources: Survey §3 and §3.1; [Graphcore layer mapping][layers-graphcore] and [Cerebras layer mapping][layers-cerebras].</sub>

#### 1.3.1 Scalar, SIMD, SIMT, MIMD, and VLIW

#### 1.3.2 SM, CU, Warp, Wavefront, and Thread Scheduling

#### 1.3.3 Instruction Pipelines, Dependency Checking, and Scoreboarding

#### 1.3.4 Latency Hiding, ILP, TLP, and Branch Divergence

#### 1.3.5 Division of Labor Among Matrix, Vector, Scalar, and Special-Function Engines

#### 1.3.6 PE-Local Execution, BSP, and Data-Triggered Execution

#### 1.3.7 Dynamic Hardware Scheduling, Static Software Scheduling, and Their Combination

#### 1.3.8 Local Systolic Dataflow versus Chip-Wide Spatial Dataflow

### 1.4 Processing Elements and Matrix Compute Units

#### 1.4.1 Processing Element: MAC, Registers, and Local Control

#### 1.4.2 Dot-Product Arrays, Outer-Product Arrays, and Reduction Trees

#### 1.4.3 Accumulator Width and Partial-Sum Storage

#### 1.4.4 Broadcast, Reduction, and Operand Distribution

#### 1.4.5 PE-Level Pipelining and Significant-Bit Propagation

#### 1.4.6 Multi-Precision Reuse, Zero Skipping, and Sparsity Metadata

### 1.5 Systolic Array Design

#### 1.5.1 One-Dimensional and Two-Dimensional Systolic Arrays

#### 1.5.2 Input Wavefronts, Data Skew, and Space-Time Scheduling

#### 1.5.3 Array Fill, Steady-State Execution, and Drain

#### 1.5.4 Weight-Stationary and Output-Stationary Arrays

#### 1.5.5 Matrix Tiling, Boundary Handling, and Padding

#### 1.5.6 Array Dimensions, Compute Utilization, and Operand-Supply Bandwidth

#### 1.5.7 Multi-Array Organization and Reconfigurable Arrays

### 1.6 Dataflow and Data Reuse

#### 1.6.1 Temporal Reuse and Spatial Reuse

#### 1.6.2 Weight-Stationary, Output-Stationary, and Input-Stationary

#### 1.6.3 Row-Stationary and Hybrid Dataflow

#### 1.6.4 Loop Nest, Loop Order, and Reuse Distance

#### 1.6.5 Local Reuse, Cross-PE Reuse, and Cross-Tile Reuse

#### 1.6.6 Compute, Storage, and Communication Trade-offs in Dataflow

### 1.7 [TPU v1 Case Study: From Systolic Array to GEMM Execution][tpu]

<sub>Sources: [TPU v1 paper][tpu], §2 and Fig. 1; later TPU generations are compared separately in Architecture.</sub>

#### 1.7.1 Matrix Multiply Unit and the Weight-Stationary Systolic Array

#### 1.7.2 Unified Buffer, Weight FIFO, and Accumulator

#### 1.7.3 Host Interface, External Weight Storage, and Instruction Control

#### 1.7.4 Datapaths for Activation/Weight/Partial Sum

#### 1.7.5 Coupling Matrix Multiply, Activation, and Output Write-Back

#### 1.7.6 The Complete Execution Path of a Single GEMM Instruction

#### 1.7.7 Boundary Between the TPU v1 Teaching Model and Later TPU Generations

### 1.8 Registers and On-Chip Local State

#### 1.8.1 Register File Capacity, Ports, and Banking

#### 1.8.2 Operand Read Bandwidth and Register Conflicts

#### 1.8.3 Thread Registers, Vector Registers, and Accumulator Registers

#### 1.8.4 Register Pressure, Occupancy, and Spilling

#### 1.8.5 General-Purpose Register Files versus Dedicated Matrix Intermediate-State Storage

#### 1.8.6 Register Allocation, Local-State Residency, and Datapath Constraints

### 1.9 On-Chip SRAM Management: Cache, Scratchpad, and Dedicated Buffers

<sub>Sources: Survey §3.2 and Fig. 5; [NVIDIA][layers-nvidia-gpu] and [AWS Neuron][layers-aws-neuron] layer mappings.</sub>

#### 1.9.1 SRAM Array, Bank, Ports, and Access Latency

#### 1.9.2 Hardware-Managed Cache and Software-Managed Scratchpad

#### 1.9.3 The GPU L1/Shared Memory/L2 Hybrid Hierarchy

#### 1.9.4 NPU Scratchpad and Spatial-Dataflow PE-Local SRAM

#### 1.9.5 Bank Conflict, Address Mapping, Swizzle, and Multicast

#### 1.9.6 Double Buffering, Prefetch, Data Residency, and Capacity Allocation

#### 1.9.7 Dedicated Accumulator Buffers and Tensor Memory

#### 1.9.8 On-Chip Memory Capacity, Bandwidth, Area, and Management Complexity

### 1.10 DRAM and External Memory Interfaces

#### 1.10.1 DRAM Cell, Row, Bank, Bank Group, and Channel

#### 1.10.2 Row Buffer, Burst Transfer, and Access Timing

#### 1.10.3 DDR, LPDDR, GDDR, and HBM

#### 1.10.4 HBM Stack, Channel, and Pseudo-Channel

#### 1.10.5 Memory Controller and Request Scheduling

#### 1.10.6 Bandwidth Utilization, Access Granularity, and Read/Write Turnaround

#### 1.10.7 ECC, Refresh, and Capacity/Bandwidth Trade-offs

### 1.11 Data Movement and Asynchronous Execution

#### 1.11.1 Load/Store Unit and Address Generators

#### 1.11.2 DMA, Descriptors, and Asynchronous Copy

#### 1.11.3 Gather/Scatter and Non-Contiguous Data Movement

#### 1.11.4 Memory-Level Parallelism and Outstanding Requests

#### 1.11.5 Producer–Consumer Pipelines and Double Buffering

#### 1.11.6 Barrier, Fence, Semaphore, and Data Visibility

#### 1.11.7 Overlap Among Compute, Data Movement, and the Memory Hierarchy

### 1.12 On-Chip Interconnect and Synchronization

#### 1.12.1 Bus, Crossbar, Ring, and Mesh NoC

#### 1.12.2 Unicast, Multicast, and Reduction Networks

#### 1.12.3 Routing, Arbitration, Flow Control, and Backpressure

#### 1.12.4 On-Chip Bandwidth, Hop Count, and Congestion

#### 1.12.5 Multi-Core Shared Memory and Coherence Boundaries

#### 1.12.6 Topology Between Compute Arrays and Memory Controllers

### 1.13 [Roofline and Performance Upper Bounds][roofline]

#### 1.13.1 Arithmetic Intensity and Data Traffic at Each Memory Boundary

#### 1.13.2 Compute Roof, Memory Roof, and Ridge Point

#### 1.13.3 Peak Roofline and Empirical Roofline

#### 1.13.4 Hierarchical Register/SRAM/DRAM Roofline

#### 1.13.5 Batch Size, Matrix Shape, and Reuse in GEMM/GEMV

#### 1.13.6 Beyond the Bandwidth Bound: Launch Latency, Synchronization, Dependencies, and Utilization Limits

#### 1.13.7 Data-Movement Energy and the Energy Roofline

### 1.14 Hierarchical GEMM Mapping and Tiling

#### 1.14.1 M/N/K Dimensions and Loop Nest Mapping

#### 1.14.2 DRAM Tile, SRAM Tile, and Register Tile

#### 1.14.3 Spatial Unrolling, Temporal Reuse, and Array Mapping

#### 1.14.4 Residency Strategies for Weights, Activations, and Partial Sums

#### 1.14.5 Tile Size, Memory Capacity, and Port Bandwidth Constraints

#### 1.14.6 Mapping Differences Among Large, Tall-Skinny, and Small Matrices

#### 1.14.7 The Complete Dataflow from DRAM to PE and Back

### 1.15 Evolution of Matrix-Engine Datapaths and Control Granularity

<sub>Sources: Survey §5.2, Figs. 13–14; [NVIDIA layer mapping][layers-nvidia-gpu].</sub>

#### 1.15.1 Volta: Warp-Cooperative Programming Interface and Sub-Warp Machine Execution

#### 1.15.2 Turing: Warp-Level MMA, ldmatrix, and Operand Layout

#### 1.15.3 Ampere: cp.async and Global-to-Shared Data Movement

#### 1.15.4 Hopper: WGMMA, TMA, and Distributed Shared Memory

#### 1.15.5 Blackwell: Tensor Memory and Paired-SM Tensor Execution

#### 1.15.6 Independent Evolution of Operand Movement, Compute Issue, and Result Residency

#### 1.15.7 Boundaries Among Hardware Capability, ISA Exposure, and Kernel Programming Abstractions

### 1.16 Non-GEMM Operators and Dedicated Support

#### 1.16.1 Softmax, LayerNorm, and RMSNorm

#### 1.16.2 Activation Functions, Exponential, Reciprocal, and Square Root

#### 1.16.3 Reduction, Scan, Sort, and Top-k

#### 1.16.4 Embedding, Gather/Scatter, and Sparse Memory Access

#### 1.16.5 Hardware Requirements of Attention and MoE

#### 1.16.6 Compute-Unit Balance and Amdahl's Law

### 1.17 Hardware Modeling, Implementation, and Verification

#### 1.17.1 Analytical Model, Cycle Model, and RTL Model

#### 1.17.2 RTL and Functional Verification of Systolic Arrays

#### 1.17.3 Memory Models, Latency Models, and Bandwidth Models

#### 1.17.4 Area, Timing, Power, and Energy-Efficiency Evaluation

#### 1.17.5 Design Space Exploration and Constrained Optimization

#### 1.17.6 Timeloop/Accelergy, SCALE-Sim, and gem5

#### 1.17.7 FPGA Prototyping, Hardware Counters, and Model Calibration

---

<a id="kernel"></a>

## 2. Kernel | Operator Implementation and Performance Optimization

> Corpus alignment: distinguish operator libraries, kernel libraries, kernel languages, and compiler-owned execution paths. Kernel exercises do not imply that all vendor interfaces are public.

### 2.1 [Kernel Programming Models and Execution Fundamentals][cuda]

#### 2.1.1 CPU Thread, GPU Thread, Block, and Grid

#### 2.1.2 Warp/Wavefront Cooperation and Cooperative Groups

#### 2.1.3 CUDA/HIP Memory Spaces and Synchronization Primitives

#### 2.1.4 Kernel Launch, Stream, Event, and Asynchronous Execution

#### 2.1.5 Device Memory, Pinned Memory, and Unified Memory

#### 2.1.6 Race Conditions, Deadlock, Out-of-Bounds Access, and Memory Consistency

### 2.2 Tensor Layout and Memory Access

#### 2.2.1 Shape, Stride, View, and Contiguous Tensor

#### 2.2.2 Row-Major, Column-Major, and Blocked Layout

#### 2.2.3 Coalescing, Vectorized Load/Store, and Alignment

#### 2.2.4 Shared Memory Bank Conflict and Swizzle

#### 2.2.5 Transpose, Packing, and Layout Conversion

#### 2.2.6 Ragged Tensor, Padding, and Variable-Length Batches

### 2.3 From Naive GEMM to Tiled GEMM

#### 2.3.1 Naive GEMM and Loop Reordering

#### 2.3.2 CPU Cache Blocking and SIMD Microkernel

#### 2.3.3 GPU Global-Memory GEMM

#### 2.3.4 Shared-Memory Tiling and Register Blocking

#### 2.3.5 Compute Reuse, Memory Coalescing, and Write-Back Optimization

#### 2.3.6 Correctness Checking and Step-by-Step Performance Analysis

### 2.4 [Tensor Core GEMM: Matrix Instructions, Data Layout, and Cooperation Scope][cutlass]

<sub>Sources: Survey §5.2 for hardware mechanisms; [NVIDIA layer mapping][layers-nvidia-gpu] for exposed interfaces.</sub>

#### 2.4.1 WMMA/MMA, Matrix Fragments, and Operand Layout

#### 2.4.2 Instruction Tile, Warp Tile, CTA Tile, and Cluster Tile

#### 2.4.3 ldmatrix, cp.async, and Operand Load Paths

#### 2.4.4 Kernel Use and Synchronization of Hopper WGMMA/TMA

#### 2.4.5 Blackwell tcgen05/TMEM and Paired-SM Kernels

#### 2.4.6 Accumulator Layout, Numerical Precision, and Epilogue

#### 2.4.7 Hardware Generation Selection, Fallback, and Operator Correctness

### 2.5 Advanced GEMM Pipelining and Scheduling

#### 2.5.1 Double/Multi-Buffering and Software Pipelining

#### 2.5.2 Asynchronous Copy and Producer–Consumer Synchronization

#### 2.5.3 Warp Specialization and Role Assignment

#### 2.5.4 Persistent Kernel and Persistent GEMM

#### 2.5.5 Split-K, Stream-K, and Work Distribution

#### 2.5.6 CTA Swizzle, Cluster, and Locality

#### 2.5.7 Occupancy, Register Pressure, and Wave Quantization

### 2.6 Matrix Computation Across Shapes and Scenarios

#### 2.6.1 GEMV and Small-Batch Decode

#### 2.6.2 Small/Tall-Skinny GEMM

#### 2.6.3 Batched GEMM and Grouped GEMM

#### 2.6.4 Variable-Length Matrices, Dynamic Shapes, and Boundary Tiles

#### 2.6.5 Low-Rank Matrices, LoRA, and Multi-Adapter GEMM

#### 2.6.6 Weight Residency, Weight Packing, and Shape Specialization

### 2.7 Elementwise, Reduction, and Scan

#### 2.7.1 Vector Add and Elementwise Fusion

#### 2.7.2 Softmax and Online Softmax

#### 2.7.3 LayerNorm, RMSNorm, and Reduction Layout

#### 2.7.4 Prefix Sum, Scan, and Histogram

#### 2.7.5 Top-k, Argmax, Sort, and Sampling

#### 2.7.6 Welford's Algorithm and Stable Reduction

### 2.8 Fusion and Memory-Traffic Elimination

#### 2.8.1 Bias/Activation/Residual Epilogue Fusion

#### 2.8.2 QKV Projection and RoPE Fusion

#### 2.8.3 Norm, Residual, and Quantization Fusion

#### 2.8.4 Fused MLP, SwiGLU, and GeGLU

#### 2.8.5 Fused Loss and Fused Optimizer

#### 2.8.6 Launch Overhead, Memory-Traffic Savings, and Fusion Boundaries

### 2.9 Exact Attention Kernels

#### 2.9.1 Operator Decomposition and Memory Traffic of Standard Attention

#### 2.9.2 [FlashAttention: IO-Aware Tiling and Recomputation][flashattention]

#### 2.9.3 FlashAttention-2/3 and Parallelism and Pipelining Optimizations

#### 2.9.4 Causal Mask, Sliding Window, and Variable-Length Attention

#### 2.9.5 Forward/Backward Attention Kernels

#### 2.9.6 FlexAttention and Programmable Attention

### 2.10 Decode Attention and KV Cache Kernels

#### 2.10.1 Paged KV Layout and Block Table

#### 2.10.2 Reading and Reduction in PagedAttention

#### 2.10.3 Split-KV and Long-Sequence Decode

#### 2.10.4 Kernel Mapping of MHA/MQA/GQA

#### 2.10.5 MLA Projection Absorption and Low-Rank Cache Access

#### 2.10.6 KV Cache Append, Gather, Copy, and Compression

### 2.11 Sparse and Irregular Kernels

#### 2.11.1 COO, CSR, CSC, BSR, and Compressed Layouts

#### 2.11.2 SpMV, SpMM, and SDDMM

#### 2.11.3 Structured Sparsity, N:M Sparsity, and Sparse Tensor Core

#### 2.11.4 Block-Sparse Attention and Dynamic Indexing

#### 2.11.5 Sparse Selection, Gather/Scatter, and Load Imbalance

#### 2.11.6 Sparsity Metadata Overhead and the Limits of Speedup

### 2.12 MoE Kernels

#### 2.12.1 Router, Top-k Gating, and Token Assignment

#### 2.12.2 Token Permutation and Unpermutation

#### 2.12.3 Grouped GEMM and Expert Padding

#### 2.12.4 Dropless MoE and Block-Sparse GEMM

#### 2.12.5 Dispatch/Combine and Communication Fusion

#### 2.12.6 Shared Experts, Routed Experts, and Compute Overlap

### 2.13 Low-Precision and Quantized Kernels

#### 2.13.1 Quantize/Dequantize and Scale Computation

#### 2.13.2 Weight-Only GEMM and Weight–Activation GEMM

#### 2.13.3 INT8/INT4 and FP8/FP4 GEMM

#### 2.13.4 Per-Tensor, Per-Channel, and Block Scaling

#### 2.13.5 Microscaling Formats and Scale Layout

#### 2.13.6 Online Quantization, Dequantization Fusion, and Numerical Validation

### 2.14 Communication Kernels: Device-Initiated Transfer, Data Movement, and Compute Fusion

<sub>Sources: Survey §3.2 and §4.4; [NVIDIA][layers-nvidia-gpu] and [AMD][layers-amd-gpu] layer mappings.</sub>

#### 2.14.1 GPU P2P Copy, Remote Memory Access, and Memory Registration

#### 2.14.2 Reduction, AllReduce, and ReduceScatter Kernels

#### 2.14.3 NVSHMEM Symmetric Address Space and Explicit Synchronization

#### 2.14.4 Device-Initiated Communication and Host-Proxy Paths

#### 2.14.5 SM-Driven versus DMA/Copy-Engine Data Movement

#### 2.14.6 Communication Tiles, GEMM–Collective Fusion, and Pipelining

#### 2.14.7 SM Occupancy, HBM Contention, and Overlap Limits of Communication Kernels

### 2.15 Key Kernels Beyond Language Models

#### 2.15.1 Conv2D, Depthwise Conv, and Implicit GEMM

#### 2.15.2 Embedding Lookup and Embedding Bag

#### 2.15.3 Graph Aggregation and Sparse Adjacency Computation

#### 2.15.4 FFT, Convolution, and State-Space Scan

#### 2.15.5 Image/Video Preprocessing and Resize

#### 2.15.6 Audio Codec, Vocoder, and Streaming Audio Computation

### 2.16 GPU Kernel Languages, DSLs, and Operator/Kernel Libraries

<sub>Sources: [NVIDIA layer mapping][layers-nvidia-gpu] and [AMD layer mapping][layers-amd-gpu]; other original library topics retained.</sub>

#### 2.16.1 CUDA/HIP: Threads, Warp/Wavefront, and Device-Specific Interfaces

#### 2.16.2 [Triton: Tile Programming, Autotuning, and Backend Differences][triton]

#### 2.16.3 [CuTe/CUTLASS and CuTe DSL: Explicit Layout and Cooperative Scheduling][cutlass]

#### 2.16.4 CUDA Tile IR/cuTile: The Boundary Between Tile-Level Abstraction and Low-Level Control

#### 2.16.5 cuBLAS/cuBLASLt/cuDNN and CUB/Thrust/libcu++

#### 2.16.6 rocBLAS/hipBLASLt/MIOpen and CK/CK-Tile/AITER/Tensile

#### 2.16.7 TileLang, FlashInfer, Transformer Engine, and DeepGEMM

#### 2.16.8 CPU Counterpart: SIMD/AMX Microkernels and oneDNN

### 2.17 NPU Kernel Programming: Tiles, Scratchpad, and Heterogeneous Engines

<sub>Sources: [TPU][layers-google-tpu], [Neuron][layers-aws-neuron], [Ascend][layers-huawei-ascend] and [Cambricon][chip-cambricon] corpus records.</sub>

#### 2.17.1 TPU Pallas: BlockSpec, Memory Space, and MXU/Vector Cooperation

#### 2.17.2 Interfacing Pallas/Mosaic with Graph Compilation

#### 2.17.3 AWS NKI: Language API, ISA Intrinsics, and SBUF/PSUM

#### 2.17.4 Operator Division of Labor Across Neuron Tensor/Vector/Scalar/GPSIMD

#### 2.17.5 Ascend C: Data Movement, Cube/Vector, and Pipeline Synchronization

#### 2.17.6 Ascend TBE/TIK, CATLASS, and Device-Specific DSLs

#### 2.17.7 Cambricon BANG C and Explicit Local-Memory Programming

#### 2.17.8 Layout and Capacity Constraints of GEMM/Attention on Different NPUs

### 2.18 Spatial Dataflow Kernels: PEs, Codelets, and Data-Triggered Tasks

<sub>Sources: [Tenstorrent][layers-tenstorrent], [Graphcore][layers-graphcore], [Cerebras][layers-cerebras], [Groq][layers-groq] and [SambaNova][layers-sambanova] layer mappings. Historical interfaces retain their generation scope.</sub>

#### 2.18.1 Tenstorrent: Boundaries Among TT-NN, TT-Metalium, and TT-LLK

#### 2.18.2 Reader/Compute/Writer and Unpack/Math/Pack

#### 2.18.3 PE-Local Buffers, NoC Data Movement, and Producer–Consumer Synchronization

#### 2.18.4 Graphcore: Vertex/Codelet and BSP Compute–Exchange–Sync

#### 2.18.5 Cerebras CSL: Wavelet, Color, Task, and Data Structure Descriptor

#### 2.18.6 Cooperation Between Local Kernels and Whole-Graph Placement/Routing

#### 2.18.7 Groq and SN40L-Era SambaFlow: Compiler-Owned Compute Paths

#### 2.18.8 Distinguishing Public Kernel Interfaces, Compiler Internals, and Non-Visible Software Layers

### 2.19 Profiling, Benchmarking, and Correctness

<sub>Sources: Profiling tools in the corpus layer mappings; benchmark fundamentals retained from the original outline.</sub>

#### 2.19.1 Microbenchmarks, Warm-up, Asynchronous Timing, and Timing Boundaries

#### 2.19.2 Nsight Compute/Systems and ROCm Profiling

#### 2.19.3 Device-Specific Analysis Tools: Neuron Explorer, PopVision, and Compiler Reports

#### 2.19.4 Roofline, Stall Reasons, Memory Efficiency, and Communication Occupancy

#### 2.19.5 Dense Peak, Sparse Peak, Achieved FLOPS, and Effective Model Work

#### 2.19.6 Numerical Tolerance, Gradient Checking, Low-Precision Error, and Differential Testing

#### 2.19.7 Race Detection, Regression Testing, and Cross-Device Performance Portability

### 2.20 From Operator to Model: Registration, Porting, and Backend Integration

<sub>Sources: Corpus software-layer mapping; integration exercises extend the source descriptions.</sub>

#### 2.20.1 PyTorch Custom Operator, Autograd, and Dispatcher

#### 2.20.2 Choosing Among Operator Library Calls, Compiler Fusion, and Custom Kernels

#### 2.20.3 Matching Shape, Layout, Precision, Sparse Format, and Device Capability

#### 2.20.4 JIT Cache, Precompiled Kernels, and Architecture-Specific Artifacts

#### 2.20.5 Graph Capture, Asynchronous Execution, and Custom Operator Compatibility

#### 2.20.6 Distinguishing API Compatibility, Numerical Equivalence, and Performance Portability

#### 2.20.7 End-to-End Integration from GEMM to Attention to Transformer Block

---

<a id="compiler"></a>

## 3. Compiler | Compilation and Program Mapping

> Corpus alignment: use platform-specific compilation and loading contracts instead of assuming every accelerator exposes a CUDA-like stack.

### 3.1 The AI Compilation Stack: Graphs, Operator Libraries, Kernels, and Device Execution

<sub>Sources: [Corpus layer schema][corpus]; [TPU][layers-google-tpu], [Neuron][layers-aws-neuron] and [Groq][layers-groq] provide contrasting stack boundaries.</sub>

#### 3.1.1 Framework → Graph IR → Tensor/Loop IR → Device Program

#### 3.1.2 Graph Compiler, Kernel Compiler, Op Library, and Runtime

#### 3.1.3 Eager, JIT, AOT, and Static Execution Plans

#### 3.1.4 Responsibility Boundaries Across Compile Time, Load Time, Run Time, and Firmware

#### 3.1.5 Standalone Software Layers, Compiler-Merged Layers, and Undisclosed Layers

#### 3.1.6 Compatibility, Programmability, Portability, and Specialization

### 3.2 Frontend, Tracing, and Graph Capture

#### 3.2.1 Python Program, Tensor Graph, and Control Flow

#### 3.2.2 Symbolic Tracing, Bytecode Capture, and Export

#### 3.2.3 Graph Break, Guard, and Recompilation

#### 3.2.4 Dynamic Shapes, Dynamic Branching, and Graph Specialization

#### 3.2.5 Custom Operator, Side Effects, and External Calls

### 3.3 Intermediate Representation

#### 3.3.1 Dataflow Graph, SSA, and Control-Flow Graph

#### 3.3.2 Tensor IR, Loop IR, and Buffer IR

#### 3.3.3 Type, Shape, Layout, and Memory Space

#### 3.3.4 [MLIR Dialect, Operation, Region, and Pass][mlir]

#### 3.3.5 StableHLO, Linalg, Affine, SCF, and GPU Dialect

### 3.4 Automatic Differentiation and Training-Graph Compilation

#### 3.4.1 Reverse-Mode and Forward-Mode AD

#### 3.4.2 Backward Graph, VJP, and JVP

#### 3.4.3 AOT Autograd and Joint Graph Optimization

#### 3.4.4 Activation Liveness and Rematerialization

#### 3.4.5 Gradient Accumulation, Gradient Communication, and the Optimizer Graph

### 3.5 Graph-Level Optimization

#### 3.5.1 Constant Folding, CSE, and Dead Code Elimination

#### 3.5.2 Operator Fusion, Operator Decomposition, and Pattern Rewriting

#### 3.5.3 Algebraic Simplification and Operator Reordering

#### 3.5.4 Attention, MLP, and Transformer-Specific Fusion

#### 3.5.5 Numerical Equivalence and Optimization Legality

### 3.6 Loop Transformation and Tensorization

#### 3.6.1 Tiling, Interchange, Unrolling, and Vectorization

#### 3.6.2 Loop Fusion, Fission, and Software Pipelining

#### 3.6.3 Affine Analysis and Polyhedral Optimization

#### 3.6.4 Parallelization and Reduction Transformation

#### 3.6.5 Tensorization and Matrix-Instruction Matching

#### 3.6.6 Mapping Loop Schedules onto Systolic/SIMT Hardware

### 3.7 Layout and Data-Movement Optimization

#### 3.7.1 Layout Inference and Layout Propagation

#### 3.7.2 Blocked Layout, Swizzle, and Thread Mapping

#### 3.7.3 Insertion and Elimination of Layout Conversions

#### 3.7.4 Cache/Scratchpad Placement and Data Reuse

#### 3.7.5 Asynchronous DMA, Prefetch, and Transfer Scheduling

### 3.8 Memory Planning and Buffer Management

#### 3.8.1 Bufferization, Aliasing, and In-Place Execution

#### 3.8.2 Liveness Analysis and Buffer Reuse

#### 3.8.3 Static Memory Plans and Dynamic Memory Allocation

#### 3.8.4 Register Allocation, Spilling, and Scratchpad Allocation

#### 3.8.5 Recomputation, Offloading, and Memory Capacity Constraints

### 3.9 Kernel Code Generation and ISA Boundaries

<sub>Sources: [NVIDIA][layers-nvidia-gpu], [AMD][layers-amd-gpu], [TPU][layers-google-tpu] and [Neuron][layers-aws-neuron] layer mappings.</sub>

#### 3.9.1 Instruction Selection, Instruction Scheduling, and Register Allocation

#### 3.9.2 LLVM/NVVM/AMDGPU Backends

#### 3.9.3 PTX, SASS, and AMD Device Instruction Sets

#### 3.9.4 Thread-Level, Tile-Level, and Tensor-Intrinsic Lowering Paths

#### 3.9.5 Triton IR → GPU IR → Device Code

#### 3.9.6 Cooperation Among Vector, Matrix, and Scalar Paths

#### 3.9.7 Distinguishing Public ISAs, Public Intrinsics, and Undisclosed Machine Instructions

#### 3.9.8 Cross-Architecture Code Generation, Feature Detection, and Fallback

### 3.10 Dynamic Shape and Runtime Specialization

#### 3.10.1 Symbolic Shape, Shape Constraint, and Shape Polymorphism

#### 3.10.2 Shape Bucketing, Padding, and Multi-Versioning

#### 3.10.3 Autotuning Cache and Compilation Cache

#### 3.10.4 Dynamic Sparsity, Dynamic Routing, and Ragged Workloads

#### 3.10.5 Compilation Latency, Cold Start, and Steady-State Performance

### 3.11 Cost Models, Autotuning, and Auto-Scheduling

#### 3.11.1 Search Space, Legality Constraints, and Schedule Representation

#### 3.11.2 Analytical/Learned Cost Models

#### 3.11.3 Searching Over Tile, Layout, Fusion, and Parallelism

#### 3.11.4 Measurement Feedback, Search Budget, and Generalization

#### 3.11.5 Hardware-Aware Optimization and Performance Portability

### 3.12 Distributed Compilation

#### 3.12.1 SPMD, Sharding Annotation, and Device Mesh

#### 3.12.2 Automatic Parallelization Strategies and Graph Partitioning

#### 3.12.3 Collective Insertion and Resharding

#### 3.12.4 Compile-Time Scheduling of Communication–Computation Overlap

#### 3.12.5 Pipeline Partitioning, Cross-Device Layout, and Memory Constraints

#### 3.12.6 [OpenXLA, GSPMD, and Shardy][openxla]

### 3.13 The PyTorch Compilation Stack

#### 3.13.1 TorchDynamo and FX Graph

#### 3.13.2 AOTAutograd and Training-Graph Capture

#### 3.13.3 TorchInductor, Triton, and CPU Codegen

#### 3.13.4 Export, Dynamic Shape, and Custom Backends

#### 3.13.5 Compilation Modes, Graph Breaks, and Performance Diagnosis

### 3.14 JAX, XLA, and TPU Compilation

<sub>Sources: [Google TPU layer mapping][layers-google-tpu].</sub>

#### 3.14.1 [JAX Tracing, jaxpr, and XLA][jax]

#### 3.14.2 StableHLO, HLO, and Multi-Stage Optimization

#### 3.14.3 Sharding, GSPMD/Shardy, and Collective Insertion

#### 3.14.4 Layout Assignment, Buffer Assignment, and Memory Scheduling

#### 3.14.5 Cooperation Between Pallas/Mosaic and High-Level Graph Compilation

#### 3.14.6 MXU/Vector/DMA Cooperation and Static Scheduling

#### 3.14.7 The libtpu Delivery Boundary and the Scope of Public TPU ISA Information

### 3.15 MLIR, TVM, and Deployment Compilation Stacks

#### 3.15.1 [Multi-Level IR and Extensible Dialects in MLIR][mlir]

#### 3.15.2 [TVM TensorIR, Relax, and Autotuning][tvm]

#### 3.15.3 IREE and Heterogeneous Runtimes

#### 3.15.4 ONNX, ONNX Runtime, and Graph Interchange

#### 3.15.5 TensorRT and Deployment Graph Optimization

#### 3.15.6 Quantized Graph Conversion, Operator Coverage, and Backend Compatibility

### 3.16 NPU Compilation: Scratchpad, Engine Division of Labor, and Device Executables

<sub>Sources: [AWS Neuron][layers-aws-neuron] and [Huawei Ascend][layers-huawei-ascend] layer mappings.</sub>

#### 3.16.1 AWS neuronx-cc: Graph Compilation and Device-Specific Code Generation

#### 3.16.2 The Distinct Entry Points of the NKI Compiler and the Graph Compiler

#### 3.16.3 SBUF/PSUM Allocation, Prefetch, and Cross-Engine Scheduling

#### 3.16.4 NEFF Artifacts, Runtime Loading, and Device Execution

#### 3.16.5 Ascend: MindIR/ATC/Graph Engine and CANN

#### 3.16.6 Operator Coverage, Static Shapes, Backend Constraints, and Model Porting

#### 3.16.7 Separating Public Interfaces, Internal IR, and Inferred Information

### 3.17 Spatial Dataflow Compilation: Graph Mapping, Memory Placement, and Communication Scheduling

<sub>Sources: [Tenstorrent][layers-tenstorrent], [Graphcore][layers-graphcore], [Cerebras][layers-cerebras], [SambaNova][layers-sambanova] and [Groq][layers-groq].</sub>

#### 3.17.1 Tenstorrent: TT-Forge/TT-XLA → TT-MLIR → TT-NN/TT-Metalium

#### 3.17.2 Graphcore Poplar: Tile Assignment, Codelets, and BSP Exchange

#### 3.17.3 Cerebras: Graph Compilation, CSL Tasks, and Layer-Pipelined/Weight-Streaming Execution

#### 3.17.4 SambaFlow (SN40L-Era): PCU/PMU Placement, Routing, and Meta-Pipelines

#### 3.17.5 Groq: Functional-Slice Placement, Cycle Scheduling, and Link Scheduling

#### 3.17.6 Temporal Reuse, Spatial Unrolling, SRAM Allocation, and Routing Resource Constraints

#### 3.17.7 Trade-offs Between Compile-Time Conflict Elimination and Runtime Scheduling

### 3.18 CIM/PNM Compilation and Memory-Centric Offload

<sub>Sources: Survey §3.2 and §6.2; [d-Matrix layer mapping][layers-d-matrix]. CXL offload remains a curriculum extension.</sub>

#### 3.18.1 Identifying and Partitioning Supported Operators, and Host/Accelerator Cooperation

#### 3.18.2 Weight Residency, Bank/Array Layout, and Data Reorganization

#### 3.18.3 Operator Mapping, Tiling, and Cross-Layer Transfer Under Capacity Limits

#### 3.18.4 Compute Coverage, Precision Constraints, and Fallback Paths

#### 3.18.5 The Corsair Aviator Case and the Boundary of Undisclosed Raptor Compilation Details

#### 3.18.6 Research Extension: CXL-Attached PNM and Heterogeneous Offload Compilation

### 3.19 Executable Artifacts, Loading Contracts, and Software-Stack Visibility

<sub>Sources: Corpus layer mappings for NVIDIA, AMD, Neuron, Groq and SambaNova; compatibility topics retained from the original outline.</sub>

#### 3.19.1 GPU: PTX/SASS, Fat Binary, and Device Code Objects

#### 3.19.2 Neuron NEFF, Groq IOP, and SambaFlow PEF

#### 3.19.3 Kernel Binaries, Weights, Routing, and Static Scheduling Metadata

#### 3.19.4 Runtime Loading, Driver Submission, and Firmware Execution

#### 3.19.5 ABI, Version Matching, Compilation Cache, and Reproducible Builds

#### 3.19.6 Distinguishing Not Applicable, Not Public, Inferred, and Confirmed

### 3.20 Compiler Validation, Debugging, and Case Studies

#### 3.20.1 IR Dump, Pass Tracing, and Minimal Reproductions

#### 3.20.2 Differential Testing and Numerical Consistency

#### 3.20.3 Ablating Fusion, Layout, and Memory Plan

#### 3.20.4 Compilation Performance Regressions and Cross-Version Reproducibility

#### 3.20.5 The Complete Compilation Path from Python GEMM to Matrix Instructions

#### 3.20.6 From Transformer Graph to Multi-Device Execution Plan

---

<a id="architecture"></a>

## 4. Architecture | Accelerator Architecture and AI Datacenters

> Primary structure: Survey §2–§6. Core platform classifications follow the survey; additional cases are labeled as corpus extensions or contrasts.

### 4.1 Scope, Terminology, and Evidence Standards for Architectural Comparison

<sub>Sources: Survey §3 and Tables 2–4; [corpus conventions and per-chip evidence][corpus].</sub>

#### 4.1.1 Generality, Specialization, Programmability, and Deployment Flexibility

#### 4.1.2 Dominant Execution/Data-Movement Models and Overlapping Hardware Mechanisms

#### 4.1.3 Chip, Die, Package, Card, Server, Rack, and Pod

#### 4.1.4 Vendor-Reported Peak, Measured Performance, and Model-Level Results

#### 4.1.5 Dense/Sparse Throughput, FMA Counting, and Numerical Formats

#### 4.1.6 Unidirectional/Bidirectional Bandwidth, Per-Accelerator/Per-System, and Reference Platforms

#### 4.1.7 Confirmed, Inferred, Contested, Not Public, and Not Reported

#### 4.1.8 Presenting Disclosed Designs, Planned/Announced Designs, and Historical Platforms Separately

### 4.2 AI Datacenter Context and Four Categories of Resource Pressure

<sub>Sources: Survey §2 and Figs. 1–3.</sub>

#### 4.2.1 From Single-Chip AI Compute to Industrial-Scale Datacenters

#### 4.2.2 Model Parameters, Context, Concurrency, and Workload Variation

#### 4.2.3 Compute Throughput, Memory Capacity, and Memory Bandwidth

#### 4.2.4 Interconnect Bandwidth, Latency, and Synchronization Overhead

#### 4.2.5 Power, Cooling, and Practically Operable Compute Capacity

#### 4.2.6 Specialized Matrix Arithmetic, Local Reuse, and Multi-Device Aggregation

#### 4.2.7 Cross-Generation Comparison: Uneven Evolution of Model Scale and Hardware Resources

### 4.3 Core Taxonomy: Four Classes of AI Accelerator Architecture

<sub>Sources: Survey §3, Table 1 and Fig. 4.</sub>

#### 4.3.1 GPU: SIMT Architecture and Dedicated Tensor/Matrix Units

#### 4.3.2 NPU: Matrix/Vector/Scalar Engines Around a Shared Scratchpad

#### 4.3.3 Spatial Dataflow: Computation Graphs Mapped onto Distributed Compute, Memory, and Communication Resources

#### 4.3.4 Compute-in-Memory: Arithmetic Units Inside or Adjacent to Memory Arrays

#### 4.3.5 Three Subclasses of Spatial Dataflow: PE Array, Reconfigurable, Functional-Slice

#### 4.3.6 Systolic Execution, Memory Technology, and Their Non-One-to-One Relation to Architecture Class

#### 4.3.7 Primary Categories, Generational Differences, and Hybrid Implementations

### 4.4 GPU: General-Purpose Parallel Execution and Specialized Matrix Computation

<sub>Sources: Survey §3 and §3.1; additional GPU records are corpus extensions, not additional survey case studies.</sub>

#### 4.4.1 [NVIDIA GPU: SM, Tensor Core, and the CUDA Programming Model][chip-nvidia-gpu]

#### 4.4.2 [AMD GPU: CU, Matrix Core, and the ROCm/HIP Programming Model][chip-amd-gpu]

#### 4.4.3 Resource Balance Among General Control Flow, Non-Matrix Operators, and Matrix Throughput

#### 4.4.4 SIMT, Cache/Shared Memory, and the Boundary of Programming Responsibility

#### 4.4.5 Corpus Extensions: [Biren][chip-biren], [Hygon DCU][chip-hygon-dcu], [Muxi][chip-muxi], and [Moore Threads][chip-mthreads]

#### 4.4.6 Corpus Extensions: [Tianshu Zhixin][chip-tianshu-zhixin] and [Xiwang][chip-xiwang]

### 4.5 NPU: Heterogeneous Compute Engines and Shared Local Memory

<sub>Sources: Survey §3 and Table 2; the final two entries broaden the case pool using the corpus.</sub>

#### 4.5.1 [Google TPU: MXU, Vector/Scalar, and Generation-Specific Units][chip-google-tpu]

#### 4.5.2 [AWS Trainium/Inferentia: NeuronCore and Explicit Scratchpad][chip-aws-neuron]

#### 4.5.3 [Huawei Ascend: Da Vinci, Cube/Vector/Scalar, and CANN][chip-huawei-ascend]

#### 4.5.4 [Intel Gaudi: Matrix Engine, TPC, and Network Integration][chip-intel-gaudi]

#### 4.5.5 [Microsoft Maia: Matrix/Vector and Cloud Deployment][chip-microsoft-maia]

#### 4.5.6 [Qualcomm Cloud AI: Matrix, Vector, and Scalar Engines][chip-qualcomm]

#### 4.5.7 [Cambricon MLU: Multi-Core Neural Processor and BANG C][chip-cambricon]

#### 4.5.8 Corpus Extensions: [Alibaba T-Head][chip-alibaba-t-head], [Kunlunxin][chip-kunlunxin], and [Furiosa][chip-furiosa]

#### 4.5.9 Corpus Extensions: [Sophgo][chip-sophgo], [Vastai][chip-vastaitech], [Tecorigin][chip-tecorigin], and [Stream Computing][chip-stream-computing]

### 4.6 Spatial Dataflow I: PE Arrays and Distributed Local Memory

<sub>Sources: Survey §3, Fig. 4(c) and Table 2; additional PE-array and manycore cases follow the corpus labels.</sub>

#### 4.6.1 [Tenstorrent: Tensix, RISC-V Control, and NoC Data Movement][chip-tenstorrent]

#### 4.6.2 [Meta MTIA: PE Grid and Model–Chip Co-Design][chip-meta-mtia]

#### 4.6.3 [Graphcore IPU: MIMD Tiles, Local SRAM, and BSP][chip-graphcore]

#### 4.6.4 [Tesla Dojo: Tile Processor and Hierarchical Communication][chip-tesla-dojo]

#### 4.6.5 [Cerebras: Wafer-Scale PE Mesh and Data-Triggered Execution][chip-cerebras]

#### 4.6.6 Boundaries Among On-Chip PE Mesh, In-Package Interconnect, and Inter-Accelerator Networks

#### 4.6.7 Corpus Extensions: [IBM Spyre][chip-ibm-spyre] and [Enflame][chip-enflame]

#### 4.6.8 Corpus Extensions: [MN-Core][chip-preferred-networks-mn-core], [Esperanto][chip-esperanto], and [PEZY][chip-pezy]

### 4.7 Spatial Dataflow II: Reconfigurable Architectures

<sub>Sources: Survey §3 and §6.5; [SambaNova layer mapping][layers-sambanova]. SN40L-era software is a historical case, not a current SDK setup guide.</sub>

#### 4.7.1 [SambaNova SN40L: Configurable Compute/Memory Tiles and Three-Tier Memory][chip-sambanova]

#### 4.7.2 Graph Placement, Memory Placement, and Static Routing

#### 4.7.3 Sections, Meta-Pipelines, and Reconfiguration Under Limited Resources

#### 4.7.4 Supported Operator Coverage, Graph-Mapping Capability, and Model Evolution

#### 4.7.5 Corpus Extensions: [Rebellions][chip-rebellions-atom] and [Tsingmicro][chip-tsingmicro]

#### 4.7.6 Corpus Extension: [NextSilicon Maverick][chip-nextsilicon-maverick] and Runtime Reconfiguration

### 4.8 Spatial Dataflow III: Functional-Slice Streaming

<sub>Sources: Survey §3 and §3.2; [Groq layer mapping][layers-groq] and the corpus Etched dossier. Topology remains generation-specific.</sub>

#### 4.8.1 [Groq TSP/LPU: Matrix, Vector, SRAM, and Switch Slices][chip-groq]

#### 4.8.2 Compiler-Determined Operation Placement, SRAM Addresses, and Time Scheduling

#### 4.8.3 Cross-Chip Datapaths and Software-Scheduled Networking

#### 4.8.4 Predictability of Static Execution, Capacity Limits, and Model Fit

#### 4.8.5 Generational/Topological Boundary Between Early Groq Systems and Later Platforms

#### 4.8.6 Corpus Extension: Model-Structure Specialization in [Etched Sohu][chip-etched-sohu] and the Scope of Public Evidence

### 4.9 Compute-in-Memory: SRAM, DRAM, and the Location of Computation

<sub>Sources: Survey §3, §3.2 and §6.2; corpus extends the case pool beyond the three surveyed CIM families.</sub>

#### 4.9.1 [d-Matrix Corsair: Digital In-SRAM MAC and Capacity Memory][chip-d-matrix]

#### 4.9.2 [SK hynix AiM: GDDR6 Bank-Adjacent MAC][chip-sk-hynix-aim]

#### 4.9.3 [Samsung PIM: HBM and Memory-Side SIMD Compute][chip-samsung-aquabolt-pim]

#### 4.9.4 The Differing Limits of SRAM Capacity, DRAM Internal Bandwidth, and Compute Throughput

#### 4.9.5 Mapping Differences Between GEMV/Small-Batch and High-Reuse GEMM

#### 4.9.6 Corpus Extension: Analog Flash Compute in [Mythic][chip-mythic]

#### 4.9.7 Historical/Contrast Cases: [Untether AI][chip-untether-ai] and [Rain AI][chip-rain-ai]

#### 4.9.8 Terminological Boundaries Among CIM, PNM, and 3D Logic–Memory Integration

### 4.10 Compute Engines: Cross-Category Organization and Trade-offs

<sub>Sources: Survey §3.1; platform records provide implementation-specific examples.</sub>

#### 4.10.1 The Balance Among Scalar/Vector/SIMD/SIMT/Matrix Engines

#### 4.10.2 Systolic Array, Tensor Core, Vector MAC, and Configurable Compute Units

#### 4.10.3 Matrix Throughput, Non-GEMM Operators, and Control-Flow Coverage

#### 4.10.4 Embedding, Gather/Scatter, and Dedicated Acceleration Units

#### 4.10.5 Static Scheduling, Dynamic Scheduling, and Data-Triggered Execution

#### 4.10.6 Arithmetic Intensity, Compute Utilization, and Area/Energy Efficiency

#### 4.10.7 Programming Flexibility, Compiler Burden, and Degree of Specialization

### 4.11 Memory Hierarchy: From Hardware Cache to Software Scratchpad

<sub>Sources: Survey §3.2 and Fig. 5; memory organization is a comparison axis, not a replacement for the four-category taxonomy.</sub>

#### 4.11.1 Fully Hardware-Managed, Hybrid, and Fully Software-Managed Memory

#### 4.11.2 The CPU Cache Counterpart and the Gaudi Cache-Management Case

#### 4.11.3 GPU: L1/Shared Memory/L2 and Dedicated Tensor Memory

#### 4.11.4 NPU: Shared Scratchpad, Accumulator Buffer, and Explicit Prefetch

#### 4.11.5 PE Array: Distributed Local SRAM and Memory Placement

#### 4.11.6 HBM, GDDR, LPDDR, DDR, and SRAM-Centric Organizations

#### 4.11.7 Determinism, QoS, Compilation Complexity, and Dynamic Access Patterns

### 4.12 Programming Models: Understanding Hardware Constraints Through Software Layers

<sub>Sources: [Corpus software-layer schema][corpus] and the per-chip layer mappings; survey §3 supplies the architectural context.</sub>

#### 4.12.1 Framework Integration, Compiler/IR, and Operator Library

#### 4.12.2 Kernel Library, Runtime, Driver/Firmware, and Assembler/ISA

#### 4.12.3 Communication Libraries and Compiler-Built-In Communication

#### 4.12.4 Thread/Warp, Tensor Tile, PE/Vertex, and Static Streaming Programming

#### 4.12.5 Kernel-Launched, Graph-Executed, and Data-Triggered Models

#### 4.12.6 Registers, Scratchpad, Distributed SRAM, and Explicit Data Movement

#### 4.12.7 Standalone Libraries, Compiler-Merged Layers, Undisclosed Interfaces, and Historical Interfaces

#### 4.12.8 The Causal Chain from Hardware Resources to Software Responsibility to Programming Model

### 4.13 Packaging, Chiplets, and Logic–Memory Integration

<sub>Sources: Survey §5.3, §5.4 and §6.2; [d-Matrix/Raptor corpus record][chip-d-matrix]. UCIe is retained as an extension.</sub>

#### 4.13.1 Monolithic Die, Multi-Chip Module, and Compute/I/O Die

#### 4.13.2 HBM Stack, Interposer, and 2.5D Packaging

#### 4.13.3 3D Stacking, Logic–DRAM Bonding, and Local Datapaths

#### 4.13.4 Memory Density, Stack Count, Interface Width, and Signaling Rate

#### 4.13.5 Chiplet Interconnect, Boards, Baseboards, and Compute Trays

#### 4.13.6 SXM/OAM, Packaging Density, and Power and Thermal Constraints

#### 4.13.7 The Raptor Early-Silicon Case and Thermal/Reliability Constraints

#### 4.13.8 Further Reading: UCIe and General Die-to-Die Interfaces

### 4.14 Host, Remote Memory, and Memory-Centric Extensions

<sub>Sources: Survey §3.2 and §6.2 cover fabric-level memory and PIM/PNM; CXL, storage offload and HBF are retained curriculum extensions, not survey coverage.</sub>

#### 4.14.1 Host–Accelerator PCIe, DMA, and CPU/Accelerator NUMA

#### 4.14.2 Distinguishing Shared Address Space, Memory Coherence, and Explicit Communication

#### 4.14.3 NVSHMEM: Symmetric Memory, Remote Access, and Synchronization

#### 4.14.4 Groq: A Compiler-Managed Distributed SRAM Address Space

#### 4.14.5 Extension: CXL.io/CXL.cache/CXL.mem and Memory Pooling

#### 4.14.6 Extension: CPU/GPU/NPU/PIM Cooperation and CXL-Attached PNM

#### 4.14.7 Extension: Storage Offload, Flash/HBF, and the Capacity Hierarchy

### 4.15 Physical Deployment Hierarchy and Scale-Up/Scale-Out Domains

<sub>Sources: Survey Introduction, Fig. 1, §4 and §6.3; [NVIDIA][layers-nvidia-gpu], [AMD][layers-amd-gpu], [TPU][layers-google-tpu] and [Neuron][layers-aws-neuron] fabric mappings. Physical and communication-domain boundaries are distinct.</sub>

#### 4.15.1 Accelerator → Server → Rack → Pod → Datacenter

#### 4.15.2 Organization of Compute Tray, Switch Tray, Host, and NIC

#### 4.15.3 The Reach of a Scale-Up Fabric Across Server/Rack/Pod

#### 4.15.4 Connecting the Scale-Out Network to the Scale-Up Domain

#### 4.15.5 Scale-Up Interfaces: NVLink/NVSwitch, Infinity Fabric, and UALink/UALoE

#### 4.15.6 NPU Fabrics: TPU ICI, NeuronLink/NeuronSwitch, and Huawei UnifiedBus

#### 4.15.7 Distinguishing Physical Rack Boundaries, Network Domain Boundaries, and Failure Domains

#### 4.15.8 Capacity, Distance, and Infrastructure Cost of Extending a Scale-Up Domain

### 4.16 Node-Scale Scale-Up Interconnect

<sub>Sources: Survey §4.1 and Fig. 6; Table 2 and Table 4 provide platform-specific qualifications.</sub>

#### 4.16.1 PCIe-Switched Attachment and Host/Root Complex

#### 4.16.2 Direct Full Mesh and the Physical Complete Graph

#### 4.16.3 Dedicated Switched Any-to-Any Fabric

#### 4.16.4 Gaudi, AMD Baseboard, and HGX/NVSwitch Cases

#### 4.16.5 Single-Hop Paths, Cable Count, Switch Capacity, and Endpoint Injection

#### 4.16.6 Topology Annotations Tied to System Configuration and Generation

### 4.17 Rack-Scale Scale-Up Interconnect

<sub>Sources: Survey §4.2 and Fig. 7; case names retain the source platform and generation.</sub>

#### 4.17.1 NVL72 and Rack-Scale Switched Fabric

#### 4.17.2 Cross-Server Organization of the Trainium UltraServer

#### 4.17.3 2D/3D Torus, Nearest-Neighbor, and Wraparound

#### 4.17.4 Dragonfly Local Groups and Global Links

#### 4.17.5 Switch Chips, Bounded Degree, Diameter, and Cabling Cost

#### 4.17.6 Compute Tray/Switch Tray and Interconnect Distance

### 4.18 Pod-Scale Scale-Up Interconnect

<sub>Sources: Survey §4.3 and Fig. 8; Boardfly and UB-Mesh retain the announcement/proposal qualifications of the supplied draft.</sub>

#### 4.18.1 TPU Pod, 3D Torus, and Optical Circuit Switching

#### 4.18.2 Boardfly: Four-Chip Building Block, Group, and Inter-Group Connection

#### 4.18.3 UB-Mesh: Hierarchically Localized nD Full Mesh

#### 4.18.4 Maia: Fully Connected Quad and Ethernet-Switched Hierarchy

#### 4.18.5 Local/Global Connectivity, Oversubscription, and Scaling Limits

#### 4.18.6 Distinguishing Deployed, Announced, and Proposed Topologies

### 4.19 Scale-Out, Network Datapaths, and Optical Interconnect

<sub>Sources: Survey §4 and §6.3 motivate these topics; detailed scale-out protocols and operations are extensions from the original outline and corpus.</sub>

#### 4.19.1 Ethernet, InfiniBand, RoCE, and EFA

#### 4.19.2 Datapaths Among NIC, RDMA, and Accelerator Memory

#### 4.19.3 Leaf–Spine/Clos and Multi-Tier Networks

#### 4.19.4 Multi-Rail, Topology-Aware Placement, and Traffic Isolation

#### 4.19.5 Flow Control, Congestion Control, Link Failure, and Rerouting

#### 4.19.6 Electrical Link, Optical Link, OCS, and Co-Packaged Optics

#### 4.19.7 In-Network Reduction, SmartNIC/DPU, and Host Offload

### 4.20 Topology Performance: Connectivity Is Not Effective Communication Performance

<sub>Sources: Survey §4 and §6.3; network-analysis foundations retained from the original outline.</sub>

#### 4.20.1 Physical Link, Logical Reachability, and Communication Path

#### 4.20.2 Degree/Radix, Diameter, Hop Count, and Path Diversity

#### 4.20.3 Endpoint Injection, Switch Capacity, and Link Direction

#### 4.20.4 Bisection Bandwidth, Oversubscription, and Hotspots

#### 4.20.5 Topology Partitioning, Message Size, Concurrent Flows, and Link Asymmetry

#### 4.20.6 Copper Reach, Optical Propagation, and System Synchronization Latency

#### 4.20.7 Aligning Platforms, Bandwidth Units, and Bidirectional Aggregation Conventions

### 4.21 Collective Semantics: Endpoint Data Transformation

<sub>Sources: Survey §4.4 and Fig. 9: collective endpoint semantics.</sub>

#### 4.21.1 AllReduce: Aggregation and Full-Result Replication

#### 4.21.2 AllGather: Shard Collection and Concatenation

#### 4.21.3 ReduceScatter: Aggregation with Retained Result Shards

#### 4.21.4 All-to-All: Destination-Rank-Oriented Data Exchange

#### 4.21.5 Implementing AllReduce as ReduceScatter + AllGather

#### 4.21.6 Communication Requirements of DDP, FSDP/ZeRO, TP/SP, and EP

#### 4.21.7 Distinguishing Collective Operation, Algorithm, and Physical Topology

### 4.22 Collective Algorithms: Logical Communication Scheduling

<sub>Sources: Survey §4.4: collective algorithms and their communication costs.</sub>

#### 4.22.1 Ring ReduceScatter/AllGather and Pipelining

#### 4.22.2 Tree and Double Binary Tree

#### 4.22.3 Recursive Halving/Doubling and Rabenseifner-Style AllReduce

#### 4.22.4 Bruck-Style and Pairwise Exchange

#### 4.22.5 Parallel Aggregated Trees (PAT)

#### 4.22.6 Hierarchical Local–Global–Local Scheduling

#### 4.22.7 TACCL and Topology-Specific Schedule Synthesis

#### 4.22.8 Message Size, Rank Count, Startup Rounds, and Data Traffic

### 4.23 Collective–Topology Mapping and Communication Offload

<sub>Sources: Survey §4.4, especially its topology-mapping and in-network-reduction discussion.</sub>

#### 4.23.1 Concurrent Ring, Tree, and Pairwise Exchange on Direct/Switched Fabrics

#### 4.23.2 Dimensional Decomposition and Multi-Ring Embedding on Mesh/Torus

#### 4.23.3 Intra-Group–Inter-Group–Intra-Group Scheduling on Dragonfly/Boardfly

#### 4.23.4 Hierarchical Locality and Link Sharing in UB-Mesh/Maia

#### 4.23.5 NVLS/CollNet-Style Reduction Offload

#### 4.23.6 Data Movement in AllGather/All-to-All and the Limits of Reduction Offload

#### 4.23.7 Communication Placement, Link Contention, and Compute–Communication Overlap

### 4.24 GPU Generational Evolution: Compute, Data Supply, and Cooperation Scope

<sub>Sources: Survey §5, Tables 3–4 and Figs. 11–15; [NVIDIA][chip-nvidia-gpu] and [AMD][chip-amd-gpu] corpus records. Preliminary specifications retain that status.</sub>

#### 4.24.1 NVIDIA: Pascal → Volta → Turing → Ampere → Hopper → Blackwell

#### 4.24.2 NVIDIA: Cross-Generation Comparison of Tensor Core Datapaths and Control Granularity

#### 4.24.3 NVIDIA: Rubin Disclosures in the Survey and Preliminary Specification Boundaries

#### 4.24.4 AMD: MI50 → CDNA/MI100 → MI200 → MI300 → MI350/MI400

#### 4.24.5 AMD: Cross-Generation Comparison of Matrix Compute, On-Chip Memory, and Interconnect

#### 4.24.6 The Divergent Evolution of Scalar/Vector Throughput and Low-Precision Matrix Throughput

#### 4.24.7 Co-Evolution of Arithmetic Capability, Memory Supply, Execution Coordination, and Deployment Form

### 4.25 Specialized Accelerator Generations: Workload Positioning and Hardware–Software Co-Design

<sub>Sources: Survey §2.3 and §5; [TPU][chip-google-tpu], [Neuron][chip-aws-neuron], [MTIA][chip-meta-mtia] and [Maia][chip-microsoft-maia] corpus records.</sub>

#### 4.25.1 TPU v1 → v2/v3: Bridging Inference and Training Designs

#### 4.25.2 TPU v4/v5e/v5p/v6e/v7: Compute, Memory, and Pod Evolution

#### 4.25.3 TPU 8t/8i: Workload Positioning and Disclosure Boundaries in the Survey

#### 4.25.4 AWS Inferentia/Trainium: NeuronCore and Multi-Engine Evolution

#### 4.25.5 Trn1/Trn2: Intra-Instance Torus and Inter-UltraServer Connection

#### 4.25.6 Trn3: Switched Fabric Evolution in the Survey

#### 4.25.7 MTIA/Maia: Shifts Across Recommendation, Generative AI, and Inference Workloads

### 4.26 Cross-Generation Comparison: Numerical Formats, Structured Sparsity, and Peak Conventions

<sub>Sources: Survey §5.1, Fig. 10, Fig. 12 and Table 3. This chapter compares hardware support; quantization methods remain in Algorithms.</sub>

#### 4.26.1 IEEE, AI-Optimized, Block-Scaled, and Integer Formats

#### 4.26.2 Separating Input Precision, Accumulation Precision, and Output Precision

#### 4.26.3 Shared Scales and Representation Overhead in Microscaling

#### 4.26.4 2:4 and Variable M:N Structured Sparsity

#### 4.26.5 Compressed Weights, Non-Zero Metadata, and Regular Datapaths

#### 4.26.6 Supported Formats, Supported Operations, and Operator Mapping Conditions

#### 4.26.7 Dense Peak, Sparse Peak, and End-to-End Effective Performance

### 4.27 Cross-Generation Comparison: Memory Hierarchy and Scale-Up Fabric

<sub>Sources: Survey §5.3, Table 4 and Fig. 15; corpus numerical discrepancies remain separately documented in the linked records.</sub>

#### 4.27.1 HBM Capacity: Die Density, Stack Height, and Stack Count

#### 4.27.2 HBM Bandwidth: Signaling Rate, Interface Width, and Stack Count

#### 4.27.3 Shared Cache, Scratchpad, and On-Chip Reuse Capacity

#### 4.27.4 Chiplet Packaging and Memory PHY/Controller Integration

#### 4.27.5 GPU Fabric: Direct Connection, Switched Node, and Rack Domain

#### 4.27.6 Neuron: Torus, Inter-Instance Ring, and Switched Fabric

#### 4.27.7 TPU: Design Trade-offs Among Torus, OCS, and Boardfly

#### 4.27.8 Joint Comparison of Device Memory, Platform Topology, and Cross-Generation Data Conventions

### 4.28 Power Delivery, Cooling, and Practically Operable Capacity

<sub>Sources: Survey §5.4 and §6.4, including Fig. 16; broader RAS and fault-isolation topics are retained extensions.</sub>

#### 4.28.1 PCIe Air Cooling, SXM/OAM, and Rack-Scale Direct Liquid Cooling

#### 4.28.2 Power Budgets at Chip, Board, Rack, and Facility

#### 4.28.3 Power Distribution, Busbar, Voltage Conversion, and Conductor Constraints

#### 4.28.4 54 VDC and the Higher-Voltage Delivery Direction Proposed in the Survey

#### 4.28.5 Coolant Temperature, Thermal Resistance, and Operating Temperature Margin

#### 4.28.6 Integration Density, Copper Interconnect Distance, and Cooling Form Factor

#### 4.28.7 Average Power, Synchronized Power Swings, and Short-Term Energy Storage

#### 4.28.8 Installed Capacity, Power-Capped Capacity, and Cooling-Limited Capacity

#### 4.28.9 Reliability Extension: ECC, Link RAS, Hardware Fault Isolation, and Maintenance

### 4.29 Future Design Challenges: Generality versus Specialization

<sub>Sources: Survey §6.1–§6.5.</sub>

#### 4.29.1 Workload Specialization and Fleet Flexibility

#### 4.29.2 Data Placement and Movement

#### 4.29.3 Communication Across Scale-Up and Scale-Out Networks

#### 4.29.4 Power Delivery and Cooling from Rack to Facility

#### 4.29.5 Architectural Specialization and Model Evolution

#### 4.29.6 The Boundary Between a Reconfigurable Model Graph and a Hard-Wired Base Model

#### 4.29.7 Taalas HC1: A Case of Adapter Tunability with a Frozen Base Model

#### 4.29.8 Software Change, Hardware Lifetime, and Reuse of Deployed Resources

### 4.30 Extensions and Contrast Cases: Photonics, Neuromorphic, and Limited-Disclosure Designs

<sub>Sources: [Corpus extended catalogue][corpus]; these entries do not add categories to the survey taxonomy. Reported, historical and limited-disclosure designs remain qualified.</sub>

#### 4.30.1 Distinguishing Photonic Compute from Optical Interconnect

#### 4.30.2 [Lightmatter][chip-lightmatter]: Treating Compute and Interconnect Paths Separately

#### 4.30.3 [Q.ANT][chip-q-ant]: A Public Photonic NPU Case

#### 4.30.4 [Luminous][chip-luminous]: A Historical Photonic-Interconnect/Electronic-Compute Case

#### 4.30.5 [SpiNNcloud SpiNNaker2][chip-spinncloud-spinnaker2]: Event/Spike-Driven Manycore

#### 4.30.6 [Tesla FSD][chip-tesla-fsd]: An Automotive NPU Contrasted with Datacenter Constraints

#### 4.30.7 [OpenAI–Broadcom/Jalapeño][chip-openai-broadcom]: Public Disclosure versus Unconfirmed Internal Structure

#### 4.30.8 Research Extension: FPGAs and Other Reconfigurable Computing

### 4.31 Architectural Evaluation and Full-Stack Case Organization

<sub>Sources: Survey §3–§6 and the [corpus dossier structure][corpus]; evaluation exercises are curriculum design, not measured survey findings.</sub>

#### 4.31.1 A Unified Case Template: Compute → Data Path → Memory → Host → Fabric

#### 4.31.2 A Unified Software Template: Framework/Compiler/Libraries/Runtime/Driver/Firmware/Communication/ISA

#### 4.31.3 Programming-Model Rationale and Tracing Public Evidence

#### 4.31.4 Comparative Mapping of GEMM/GEMV/Attention/MoE/Embedding

#### 4.31.5 Separating Hardware Capability, Kernel Utilization, and Full-Model Performance

#### 4.31.6 The Pareto Frontier of Performance, Energy, Area, Cost, and Programmability

#### 4.31.7 Annotating Source Dates, Reference Platforms, Software Versions, and Incomparable Data

#### 4.31.8 Model Evolution, Resource Reuse, and Cross-Layer Design Trade-offs

---

<a id="system"></a>

## 5. System | Training, Inference, and AI Infrastructure

> The original training/serving/RL scope is retained. Corpus-derived runtime boundaries and survey-derived fleet, communication, and power constraints are added as explicit cross-layer topics.

### 5.1 AI Runtime and Operating System Fundamentals

#### 5.1.1 Processes, Threads, Coroutines, and the Python GIL

#### 5.1.2 CPU Affinity, NUMA, and Host Memory

#### 5.1.3 GPU Context, Stream, Event, and CUDA Graph

#### 5.1.4 IPC, Shared Memory, RPC, and Serialization

#### 5.1.5 Memory Allocators, Memory Pools, and Fragmentation

#### 5.1.6 Driver, Runtime, Library, and Container Dependencies

### 5.2 The Execution Chain of Device Runtime, Driver, and Firmware

<sub>Sources: [NVIDIA][layers-nvidia-gpu], [AMD][layers-amd-gpu], [Neuron][layers-aws-neuron], [Ascend][layers-huawei-ascend], [Tenstorrent][layers-tenstorrent] and [Groq][layers-groq] layer mappings.</sub>

#### 5.2.1 Model Loading, Executable Artifacts, and Device Resource Initialization

#### 5.2.2 Context, Command Queue, Doorbell, Event, and Interrupt

#### 5.2.3 Device Memory Allocation, Virtual Memory, and Host–Device Transfer

#### 5.2.4 The Boundary Between the CUDA Runtime/Driver API and the GPU Kernel Module

#### 5.2.5 The Boundary Among HIP/ROCr-HSA, AQL Queue, and amdgpu/KFD

#### 5.2.6 Neuron libnrt/NEFF, AscendCL, and Device-Specific Execution

#### 5.2.7 TT-Metalium Host/Device Programs and User-Space/Kernel-Space Drivers

#### 5.2.8 Distinguishing a Thin Static Executor from a Dynamic Kernel-Launch Runtime

### 5.3 System Metrics, Queueing, and Capacity Planning

#### 5.3.1 TTFT, TPOT/ITL, and End-to-End Latency

#### 5.3.2 Request Throughput, Token Throughput, and Goodput

#### 5.3.3 Latency Percentiles, SLOs, and Tail Latency

#### 5.3.4 Arrival Process, Queueing, and Little's Law

#### 5.3.5 MFU, HFU, Device Utilization, and Effective Work

#### 5.3.6 Tokens/Dollar, Tokens/Joule, and Total Cost of Ownership

#### 5.3.7 Capacity, Concurrency, Batch Size, and Load Inflection Points

### 5.4 Model Workloads and Resource Profiles

#### 5.4.1 Training, Prefill, Decode, and Verification

#### 5.4.2 Parameters, Gradients, Optimizer States, and Activations

#### 5.4.3 KV Cache, Recurrent State, and Model State

#### 5.4.4 Execution Profiles of Dense, MoE, Multimodal, and Diffusion Models

#### 5.4.5 Compute/Memory/Communication/CPU Bottlenecks

#### 5.4.6 Batch Size, Context Length, and Output Length Distribution

### 5.5 Distributed Runtime and Collective Communication

<sub>Sources: Survey §4.4 for semantics and algorithms; corpus layer mappings for vendor runtime boundaries. Detailed API exercises remain extensions.</sub>

#### 5.5.1 Rank, World Size, Process Group, and Device Mesh

#### 5.5.2 Collective Call Semantics, Completion Semantics, and Consistent Call Ordering

#### 5.5.3 Broadcast, Reduce, AllReduce, AllGather, ReduceScatter, and All-to-All

#### 5.5.4 NCCL/RCCL, Gloo/MPI/UCX, and Backend Selection

#### 5.5.5 The Differing Boundaries of NCCom, ICI Runtime, and Compiler-Built-In Collectives

#### 5.5.6 Topology Discovery, Algorithm Selection, and Communication Performance Tuning

#### 5.5.7 Asynchronous Communication, Stream/Event, and Compute Overlap

#### 5.5.8 Communication Deadlock, Timeout, Failure, and Diagnosis

### 5.6 Data Parallelism and Parameter Sharding

#### 5.6.1 Synchronous SGD and Distributed Data Parallel

#### 5.6.2 Gradient Bucketing and Communication Overlap

#### 5.6.3 ZeRO-1/2/3 and State Sharding

#### 5.6.4 FSDP/FSDP2 and Parameter All-Gather

#### 5.6.5 Gradient Accumulation and Effective Batch Size

#### 5.6.6 Replicated, Sharded, and Hybrid Sharded Training

### 5.7 Tensor Parallelism

#### 5.7.1 Column-Parallel and Row-Parallel Linear Layers

#### 5.7.2 Partitioning Attention Heads and MLPs

#### 5.7.3 Vocabulary, Embedding, and Loss Parallelism

#### 5.7.4 All-Reduce/All-Gather/Reduce-Scatter in TP

#### 5.7.5 KV Head Count, Replication, and Partitioning Constraints

#### 5.7.6 Single-Node and Cross-Node Tensor Parallelism

### 5.8 Pipeline Parallelism

#### 5.8.1 Stage Partitioning and Microbatches

#### 5.8.2 GPipe, 1F1B, and Interleaved Pipelines

#### 5.8.3 Pipeline Bubbles and Load Balance

#### 5.8.4 Zero-Bubble Scheduling and Execution Dependencies

#### 5.8.5 Activation Communication and Cross-Stage Overlap

#### 5.8.6 Virtual Pipeline Stages and Dynamic Repartitioning

### 5.9 Sequence and Context Parallelism

#### 5.9.1 The Boundary Between Sequence Parallelism and Context Parallelism

#### 5.9.2 Sequence Partitioning for Long-Context Attention

#### 5.9.3 Ring Attention and KV Block Passing

#### 5.9.4 Ulysses and All-to-All Sequence Redistribution

#### 5.9.5 Hierarchical, Hybrid, and Two-Dimensional Context Parallelism

#### 5.9.6 Causal Masking, Load Balance, and Communication Hiding

### 5.10 Expert Parallelism

#### 5.10.1 Expert Placement, Replication, and Sharding

#### 5.10.2 Token Dispatch, All-to-All, and Combine

#### 5.10.3 Combining Expert Parallelism with Tensor Parallelism

#### 5.10.4 Expert Load Balance and Hot Experts

#### 5.10.5 Dropless Routing and Capacity Management

#### 5.10.6 Cross-Node MoE Communication and Topology-Aware Deployment

### 5.11 Hybrid Parallelism and Automatic Planning

<sub>Sources: Survey §4.4 and §6.3 motivate communication placement; distributed-training implementation topics are retained.</sub>

#### 5.11.1 Combining DP/TP/PP/SP/CP/EP

#### 5.11.2 Device Mesh, Parallel Groups, and Topological Layering

#### 5.11.3 Model Partitioning, Resharding, and Layout Conversion

#### 5.11.4 Memory Constraints, Message Size, Communication Latency, and Parallelism Choice

#### 5.11.5 Communication Placement Across Scale-Up/Scale-Out Domains

#### 5.11.6 Heterogeneous Devices, Stragglers, and Uneven Sharding

#### 5.11.7 Automatic Parallelization, Search, and Performance Models

### 5.12 Training Memory Management

#### 5.12.1 Activation Checkpointing and Selective Recomputation

#### 5.12.2 CPU/NVMe Offload and State Tiering

#### 5.12.3 Activation Offload, Prefetch, and Asynchronous Transfer

#### 5.12.4 Optimizer State Sharding and Low-Precision States

#### 5.12.5 Memory Budget, Peak Memory, and Fragmentation

#### 5.12.6 Training Graphs, Communication Buffers, and CUDA Graph Memory

### 5.13 Training Data and Checkpoint Pipelines

#### 5.13.1 Tokenization, Packing, and Dynamic Batching

#### 5.13.2 Dataloader, Prefetch, and the CPU–GPU Pipeline

#### 5.13.3 Distributed Data Sharding, Shuffling, and Recovery

#### 5.13.4 Checkpoint Save/Load and Parallel I/O

#### 5.13.5 Asynchronous Checkpointing and Incremental Saving

#### 5.13.6 Consistency Among Data, Parameters, Optimizer, and Random State

### 5.14 Training Runtime and Numerical Stability

#### 5.14.1 Training Step, Autograd, and Optimizer Step

#### 5.14.2 Mixed-Precision Training and the Scope of Hardware/Kernel Support

#### 5.14.3 Loss Scaling, Gradient Clipping, and Anomaly Detection

#### 5.14.4 Communication Precision, Accumulation Order, and Reproducibility

#### 5.14.5 Diagnosing NaN/Inf, Loss Spikes, and Training Divergence

#### 5.14.6 Co-Optimizing Operators, Compilers, and Distributed Training

### 5.15 Elasticity and Fault Tolerance in Large-Scale Training

#### 5.15.1 Failure Domains, Heartbeats, and Health Checks

#### 5.15.2 Checkpoint/Restart and Fast Recovery

#### 5.15.3 Elastic Training and Dynamic World Size

#### 5.15.4 Straggler Detection and Slow-Node Replacement

#### 5.15.5 Network Failures, Storage Failures, and Silent Data Corruption

#### 5.15.6 Training Efficiency, Failure Cost, and Available Capacity

### 5.16 Distributed Training Frameworks and Accelerator Backends

<sub>Sources: Original training outline, extended with [TPU][layers-google-tpu], [Neuron][layers-aws-neuron] and [Ascend][layers-huawei-ascend] framework mappings.</sub>

#### 5.16.1 PyTorch Distributed: DDP, FSDP, and DTensor

#### 5.16.2 Megatron-LM/Megatron-Core and DeepSpeed

#### 5.16.3 TorchTitan and Native PyTorch Training

#### 5.16.4 JAX/MaxText and TPU Training

#### 5.16.5 NeMo and Training Workflow Integration

#### 5.16.6 AWS NxD Training, Ascend Adaptation, and Device-Specific Training Paths

#### 5.16.7 Distinguishing Unified Training Concepts from Per-Backend Support Coverage

### 5.17 The Full Lifecycle of an Inference Request

#### 5.17.1 API Server, Tokenizer, and Request Queue

#### 5.17.2 Scheduler, Worker, Model Runner, and Executor

#### 5.17.3 Model Configuration, Weight Loading, and Parameter Initialization

#### 5.17.4 Prefill, Decode, Sampling, and Detokenization

#### 5.17.5 Streaming Output, Cancellation, and Resource Reclamation

#### 5.17.6 Embedding, Reranking, Reward, and Generation Requests

### 5.18 Batching and Online Scheduling

#### 5.18.1 Static Batching, Dynamic Batching, and Continuous Batching

#### 5.18.2 Iteration-Level Scheduling and Token Budgets

#### 5.18.3 Chunked Prefill and Decode Priority

#### 5.18.4 Preemption, Recompute, and Swap

#### 5.18.5 CPU–GPU Overlap and Low-Overhead Schedulers

#### 5.18.6 Fairness, Priority, and Mixing Short and Long Requests

#### 5.18.7 Load-Aware Batch Size and Adaptive Scheduling

### 5.19 KV Cache Allocation, Addressing, and Lifecycle

#### 5.19.1 Contiguous, Paged, and Blocked KV Cache

#### 5.19.2 Block Table, Memory Pool, and Dynamic Growth

#### 5.19.3 Cache Organization for MHA/GQA/MLA

#### 5.19.4 Prefix Sharing, Reference Counting, and Copy-on-Write

#### 5.19.5 KV Cache Eviction, Compaction, and Fragmentation

#### 5.19.6 Diagnosing Cache Hits, OOM, and Memory Budget

### 5.20 Prefix Cache and Multi-Tier Caching

#### 5.20.1 Prefix Caching with Radix-Tree/Hash Indexing

#### 5.20.2 Cache-Aware Scheduling and Prefix Locality

#### 5.20.3 [HiCache: HBM, Host DRAM, and External Storage][hicache]

#### 5.20.4 LMCache, Mooncake, and Shared KV Storage

#### 5.20.5 Cache Prefetch, Migration, and Asynchronous Write-Back

#### 5.20.6 Cache Coherence Across Processes, Devices, and Nodes

#### 5.20.7 Multi-Tenant Cache Isolation and Invalidation Management

### 5.21 Disaggregated Serving

<sub>Sources: Survey §6.1 frames specialization and fleet flexibility; named serving systems are retained from the original outline.</sub>

#### 5.21.1 Prefill–Decode Disaggregation and Per-Phase Resource Needs

#### 5.21.2 KV Transfer, Connectors, and the Data Plane

#### 5.21.3 Independent Scaling of Prefill and Decode

#### 5.21.4 Heterogeneous Hardware Selection, Data Formats, and Migration Cost

#### 5.21.5 Attention–FFN Disaggregation and Fine-Grained Splitting

#### 5.21.6 Resource-Pool Imbalance, Queue Growth, and Idle Capacity

#### 5.21.7 Splitwise, DistServe, and Mooncake Case Studies

### 5.22 Routing and Distributed Serving Scheduling

#### 5.22.1 Load Balancing, Join-Shortest-Queue, and Request Routing

#### 5.22.2 KV-Aware, Prefix-Aware, and Cache-Aware Routing

#### 5.22.3 Replica Placement and Session Affinity

#### 5.22.4 Admission Control, Backpressure, and Rate Limiting

#### 5.22.5 Autoscaling, Cold Start, and Warm Pools

#### 5.22.6 Cross-Rack, Cross-Region, and Tiered Serving Architectures

### 5.23 System Design for MoE Serving

#### 5.23.1 Expert Parallel Serving and Communication Paths

#### 5.23.2 Combining Attention-DP with Expert Parallelism

#### 5.23.3 Expert Parallel Load Balancing

#### 5.23.4 Hot Expert Replication and Dynamic Placement

#### 5.23.5 Expert Offload, Prefetch, and CPU–GPU Cooperation

#### 5.23.6 Shared Experts, Routed Experts, and Cross-Device Execution

### 5.24 Deploying and Tuning Quantized Models

#### 5.24.1 Precision Configuration for Weights, Activations, and KV Cache

#### 5.24.2 Checkpoint Format, Packing, and Quantization Metadata

#### 5.24.3 Matching Quantization Schemes, Kernels, and Hardware Support

#### 5.24.4 Offline Quantization, Online Quantization, and Load-Time Conversion

#### 5.24.5 Mixed-Precision Deployment for Dense/MoE/Multimodal Models

#### 5.24.6 Joint Evaluation of Precision, Latency, Throughput, Capacity, and Cost

### 5.25 System Support for Sparse Models and Long Context

#### 5.25.1 Weight Sparsity and Sparse Weight Storage

#### 5.25.2 Indexing, Routing, and Cache Access in Sparse Attention

#### 5.25.3 Dynamic Token Selection and Batch Organization

#### 5.25.4 KV Pruning/Compression and Memory Management

#### 5.25.5 Load Balancing and Communication Under Dynamic Sparsity

#### 5.25.6 Sparse Compute Gains Versus Preprocessing and Metadata Overhead

### 5.26 System Implementation of Speculative Decoding

#### 5.26.1 Draft Model, Target Model, and Verification Worker

#### 5.26.2 Same-Device, Separate-Device, and Heterogeneous Draft/Target Deployment

#### 5.26.3 Acceptance-Aware and Load-Aware Draft Length

#### 5.26.4 Tree/Block Verification and Batch Capacity

#### 5.26.5 Draft/Target KV Cache Management and Rollback

#### 5.26.6 Trade-offs Among Online Requests, Throughput, and Single-Request Latency

#### 5.26.7 Draft Model Training, Updating, and Service Integration

### 5.27 Multi-Model, Multi-Tenant, and Adapter Serving

#### 5.27.1 Multi-Model Serving and Model Routing

#### 5.27.2 Multi-LoRA Batching and Adapter Cache

#### 5.27.3 Weight Sharing, Hot Loading, and Dynamic Model Switching

#### 5.27.4 GPU Sharing, MIG, MPS, and Resource Isolation

#### 5.27.5 QoS-Constrained Co-Location and Interference Management

#### 5.27.6 Tenant Fairness, Quotas, and SLO Isolation

### 5.28 Serving Frameworks, Component Ecosystem, and Device Backends

<sub>Sources: Original serving outline; corpus mappings motivate backend-specific coverage checks rather than assuming every framework runs on every accelerator.</sub>

#### 5.28.1 [vLLM: Engine, Scheduler, Worker, and PagedAttention][vllm]

#### 5.28.2 [SGLang: Scheduler, RadixAttention, and Model Runner][sglang]

#### 5.28.3 TensorRT-LLM and NVIDIA Triton Inference Server

#### 5.28.4 NVIDIA Dynamo, llm-d, and Distributed Inference Orchestration

#### 5.28.5 Ray Serve and Multi-Stage Serving Pipelines

#### 5.28.6 llama.cpp, MLX, and CPU/Local Inference

#### 5.28.7 FlashInfer, NIXL, and Reusable Inference Components

#### 5.28.8 The Backend Compatibility Matrix: Model, Precision, Kernel, Device, and SDK Version

#### 5.28.9 The Boundary Between Vendor SDK/Serving Entry Points and General Serving Frameworks

### 5.29 RL Post-Training Infrastructure

#### 5.29.1 Actor, Rollout, Reward, Critic, and Reference Model

#### 5.29.2 Combining the Training Engine and the Inference Engine

#### 5.29.3 Colocated, Disaggregated, and Hybrid Resource Layouts

#### 5.29.4 Synchronous/Asynchronous RL Pipelines

#### 5.29.5 Partial Rollout, Dynamic Sampling, and Stragglers

#### 5.29.6 Multi-Turn Rollout, Environment Interaction, and Tool Execution

#### 5.29.7 Online Weight Update and Weight Broadcast

### 5.30 Training–Inference Consistency and RL Correctness

#### 5.30.1 Aligning Tokenizer, Chat Template, and Special Tokens

#### 5.30.2 Log Probability, Masking, and Sequence Boundaries

#### 5.30.3 Consistency Between the Sampling Distribution and the Training Objective

#### 5.30.4 Numerical Differences Across Kernels, Precision, and Reduction Paths

#### 5.30.5 Policy Version, Weight Staleness, and Off-Policy Drift

#### 5.30.6 Importance Sampling and Mismatch Correction

#### 5.30.7 Correctness Validation of Gradients, Samples, and Performance Optimizations

### 5.31 RL Frameworks and Source-Code Studies

#### 5.31.1 verl: Initialization, Rollout, and Training Workflow

#### 5.31.2 slime: Rollout-First Design and Backend Integration

#### 5.31.3 OpenRLHF and Ray-Based Actor Management

#### 5.31.4 AReaL and Asynchronous RL Training

#### 5.31.5 TRL and Lightweight Post-Training Workflows

#### 5.31.6 Weight Update, Memory Sleep/Wake, and Resource Reuse

#### 5.31.7 FP8/INT4, Speculative Decoding, and Multi-Turn Tasks in RL

### 5.32 Multimodal and Real-Time Speech Serving

#### 5.32.1 Image/Video Preprocessing and Vision Encoders

#### 5.32.2 Multi-Stage Encoder–Decoder Scheduling

#### 5.32.3 Vision Tokens, Cross-Modal Cache, and Batching

#### 5.32.4 Audio Codec, Dual-AR, and the Thinker–Talker Pipeline

#### 5.32.5 Streaming ASR, TTS, Vocoder, and Full-Duplex Interaction

#### 5.32.6 CPU Resources, Audio/Video I/O, and Real-Time Latency Budgets

### 5.33 Diffusion and Non-Autoregressive Model Systems

#### 5.33.1 Denoising Steps, Schedulers, and Multi-Stage Execution

#### 5.33.2 CFG Parallelism and Model Parallelism

#### 5.33.3 Sequence/Patch/Temporal Parallelism

#### 5.33.4 Cross-Step Feature Cache and Compute Reuse

#### 5.33.5 Block Scheduling and Caching for Diffusion LLMs

#### 5.33.6 Memory, Throughput, and Service Orchestration for Image/Video Generation

### 5.34 RAG, Agents, and Compound AI Systems

#### 5.34.1 Retrieval, Reranking, Generation, and the Index Pipeline

#### 5.34.2 Vector Databases, Embeddings, and Retrieval Caching

#### 5.34.3 Tool Calling, Sandboxing, and Environment Resource Management

#### 5.34.4 Multi-Turn Sessions, Long-Term State, and Context Management

#### 5.34.5 Agent Workflows, Parallel Tools, and Long-Tail Task Scheduling

#### 5.34.6 Model Routing, Cascades, and System-Level Caching

#### 5.34.7 End-to-End Quality, Latency, and Cost of Compound Tasks

### 5.35 Cluster Orchestration and Production Deployment

#### 5.35.1 Slurm, Kubernetes, and GPU Resource Scheduling

#### 5.35.2 Gang Scheduling, Quotas, and Cluster Fairness

#### 5.35.3 Docker, Images, Dependencies, and Reproducible Environments

#### 5.35.4 Model Registry, Artifact Storage, and Release Pipelines

#### 5.35.5 Canary, Rolling Upgrade, and Rollback

#### 5.35.6 Multi-Cluster Deployment, Disaster Recovery, and Security Boundaries

### 5.36 Scheduling Heterogeneous Fleets and Specialized Resource Pools

<sub>Sources: Survey §6.1–§6.3; scheduling mechanisms extend the survey’s design-challenge framing.</sub>

#### 5.36.1 Phase Profiles of Training, Prefill, Decode, Draft/Verify, and Multimodal Stages

#### 5.36.2 Unified Resource Pools versus Workload-Partitioned Specialized Pools

#### 5.36.3 Scheduling Constraints from Model Compatibility, Precision Support, and Available Kernels

#### 5.36.4 Capacity Fragmentation, Idle Devices, Queue Imbalance, and Resource Rebalancing

#### 5.36.5 Data-Movement Cost of Migrating Weights, KV Cache, and Activations

#### 5.36.6 Rack/Pod Placement and Cross-Network-Domain Communication

#### 5.36.7 Throughput, Tail Latency, Cost, and Reuse of Deployed Hardware

### 5.37 Power/Thermal-Aware System Operation

<sub>Sources: Survey §5.4 and §6.4; runtime policies are tutorial extensions, not evaluated algorithms in the survey.</sub>

#### 5.37.1 Connecting Device, Rack, and Facility Power Budgets

#### 5.37.2 Power Capping, Frequency Scaling, and Job Progress

#### 5.37.3 Synchronized Training Phases, Power Swings, and Short-Term Energy Buffering

#### 5.37.4 Cooling Capacity, Thermal Margin, and Concurrently Operable Device Count

#### 5.37.5 Jointly Considering Placement, Concurrency, Batch Size, and Power Limits

#### 5.37.6 Average Power, Peak Power, Tokens/Joule, and SLOs

#### 5.37.7 The Boundary Between Hardware Design Constraints and Runtime Scheduling Policy

### 5.38 Security, Privacy, and Trustworthy AI Infrastructure

#### 5.38.1 Authentication, Authorization, Quotas, and Multi-Tenant Data Isolation

#### 5.38.2 Model Weights, Serialization Formats, and Software Supply-Chain Security

#### 5.38.3 Confidential Computing, TEEs, and Confidential Accelerator Compute

#### 5.38.4 KV Cache Isolation, Sensitive Data, and Side-Channel Defense

#### 5.38.5 Tool Sandboxing, Least Privilege, and Prompt Injection Defense

#### 5.38.6 Auditing, Data Provenance, and Privacy-Preserving Workflows

### 5.39 Observability, Benchmarking, and Troubleshooting

#### 5.39.1 Metrics, Logs, Tracing, and Cross-Component Timelines

#### 5.39.2 PyTorch Profiler, Nsight, ROCm Tools, and Device-Specific Profilers

#### 5.39.3 Localizing Issues Across Framework/Compiler/Kernel/Runtime/Driver

#### 5.39.4 Joint Monitoring of GPU/NPU/CPU/Network/Storage

#### 5.39.5 Offline/Online Benchmarking and Real Traffic Replay

#### 5.39.6 NCCL Hangs, OOM, Memory Leaks, and CPU Bottlenecks

#### 5.39.7 Performance Regressions, Version Pinning, Numerical Consistency, and Experiment Reproducibility

#### 5.39.8 MLPerf, Serving Benchmarks, and Reporting Conventions

### 5.40 [Reading System Source Code and Cross-Layer End-to-End Practice][awesome]

<sub>Sources: Original systems reading index and corpus software-layer organization; planned walkthrough exercises.</sub>

#### 5.40.1 Implementing a Mini Training Runtime from Scratch

#### 5.40.2 Implementing a Continuous-Batching LLM Server from Scratch

#### 5.40.3 The Complete Path of One Request Through SGLang/vLLM

#### 5.40.4 The Complete Path of One RL Step Through Rollout/Reward/Training

#### 5.40.5 From HF Checkpoint to Quantization, Multi-Device, and Disaggregated Deployment

#### 5.40.6 From Model Frontend to Device Execution: Cross-Platform Paths Within Public Interfaces

#### 5.40.7 Cross-Layer Diagnosis from Kernel to Compiler to Runtime to Driver to Hardware

#### 5.40.8 Deployment Differences for the Same Model Across Hardware/Programming Models

---

<a id="algorithms"></a>

## 6. Algorithms | Models, Training Methods, and Generation Algorithms

> Retained model and algorithm curriculum. The hardware survey motivates workload diversity and adaptability, but is not the source for the detailed algorithms or model-family histories below.

### 6.1 Deep Learning and Model Computation Fundamentals

#### 6.1.1 Tensor, Linear Layer, MLP, and Activation

#### 6.1.2 Loss, Gradient, Backpropagation, and Optimizer

#### 6.1.3 Batch, Sequence, Hidden Dimension, and Parameter Count

#### 6.1.4 Computation Graphs, Automatic Differentiation, and Training/Inference Differences

#### 6.1.5 Computational Complexity, Space Complexity, and Data Movement

#### 6.1.6 Dense, Sparse, and Conditional Computation

### 6.2 The Full Lifecycle of a Foundation Model

#### 6.2.1 Pretraining, Continued Pretraining, and Mid-Training

#### 6.2.2 Supervised Fine-Tuning and Instruction Tuning

#### 6.2.3 Preference Optimization and Reinforcement Learning

#### 6.2.4 Distillation, Compression, and Deployment

#### 6.2.5 Inference, Test-Time Compute, and Continuous Evaluation

#### 6.2.6 Scaling Laws and Compute-Optimal Training

### 6.3 Tokenization and Input Representation

#### 6.3.1 BPE, WordPiece, Unigram, and Byte-Level Tokenization

#### 6.3.2 Vocabulary, Embedding, and Output Projection

#### 6.3.3 Special Tokens, Chat Templates, and Conversation Formats

#### 6.3.4 Padding, Packing, Masking, and Sequence Boundaries

#### 6.3.5 Text, Image, Audio, and Video Tokens

#### 6.3.6 The Effect of Tokenization on Context Length and Compute Cost

### 6.4 Transformer Structure and Its Evolution

#### 6.4.1 Encoder-Only, Decoder-Only, and Encoder–Decoder

#### 6.4.2 Self-Attention, Cross-Attention, and FFN

#### 6.4.3 Residual Connection, LayerNorm, and RMSNorm

#### 6.4.4 Pre-Norm, Post-Norm, and Deep-Network Stability

#### 6.4.5 GELU, GLU, GeGLU, and SwiGLU

#### 6.4.6 Weight Tying, Embedding, and the LM Head

### 6.5 The Basic Mechanism of Attention

#### 6.5.1 Scaled Dot-Product Attention

#### 6.5.2 Q, K, V, and Attention Scores

#### 6.5.3 Causal, Bidirectional, and Cross-Attention Masks

#### 6.5.4 Softmax, Normalization, and Stability

#### 6.5.5 Compute, Memory, and Long-Sequence Complexity of Attention

#### 6.5.6 The Boundary Between Exact Attention and Sparse/Approximate Attention

### 6.6 MHA, MQA, GQA, and MLA

#### 6.6.1 Multi-Head Attention (MHA)

#### 6.6.2 Multi-Query Attention (MQA)

#### 6.6.3 Grouped-Query Attention (GQA)

#### 6.6.4 Multi-Head Latent Attention (MLA)

#### 6.6.5 Head Sharing, Latent Compression, and Cache Capacity

#### 6.6.6 KV Cache and Incremental Autoregressive Inference

#### 6.6.7 Quality, Bandwidth, and Parallelism Trade-offs Among Attention Variants

### 6.7 Position Encoding and Context Extension

#### 6.7.1 Absolute and Relative Position Embeddings

#### 6.7.2 RoPE, ALiBi, and Position Representation

#### 6.7.3 RoPE Scaling, Position Interpolation, and YaRN

#### 6.7.4 Sliding Window, Attention Sink, and Streaming Context

#### 6.7.5 Long-Context Training, Extrapolation, and Retrieval Ability

#### 6.7.6 Context Compression, Memory, and Cross-Segment State

### 6.8 Sparse and Compressed Attention

#### 6.8.1 Token, Block, Head, and Layer-Level Sparsity

#### 6.8.2 Local, Global, Dilated, and Sliding-Window Attention

#### 6.8.3 Longformer, BigBird, and Sparse Connectivity Patterns

#### 6.8.4 [Native Sparse Attention (NSA)][nsa]

#### 6.8.5 Mixture of Block Attention (MoBA)

#### 6.8.6 DeepSeek Sparse Attention (DSA)

#### 6.8.7 [Compressed Sparse Attention (CSA) and Heavily Compressed Attention (HCA)][deepseek4]

#### 6.8.8 Dynamic Token Selection, Top-k, and Trainable Sparsity

### 6.9 Linear Attention, SSMs, and Hybrid Models

#### 6.9.1 Kernelized Linear Attention and Linear Complexity

#### 6.9.2 RetNet, RWKV, and Recurrent State

#### 6.9.3 S4, Mamba, and Mamba-2

#### 6.9.4 DeltaNet and Gated DeltaNet

#### 6.9.5 Attention–SSM/Linear-Attention Hybrid Architectures

#### 6.9.6 Prefill Scan, Recurrent Decode, and State Capacity

### 6.10 Mixture of Experts

#### 6.10.1 Dense FFN → Sparse MoE

#### 6.10.2 Router, Top-k Routing, and Expert Selection

#### 6.10.3 Token Choice, Expert Choice, and Capacity Constraints

#### 6.10.4 Shared Experts, Fine-Grained Experts, and Expert Partitioning

#### 6.10.5 Auxiliary Loss and Auxiliary-Loss-Free Balancing

#### 6.10.6 Expert Specialization, Routing Collapse, and Training Stability

#### 6.10.7 Activated Parameters, Total Parameter Count, and Effective Compute

### 6.11 Pretraining Objectives and Optimization Algorithms

#### 6.11.1 Causal LM, Masked LM, and Denoising Objectives

#### 6.11.2 Next-Token Prediction and Multi-Token Prediction

#### 6.11.3 SGD, AdamW, Adafactor, and Muon

#### 6.11.4 Learning Rate Schedule, Warm-up, and Weight Decay

#### 6.11.5 Gradient Clipping, Batch Scaling, and Optimization Stability

#### 6.11.6 Low-Precision Training, Error Accumulation, and Precision Sensitivity

### 6.12 Data, Training Recipes, and Model Scaling

#### 6.12.1 Data Collection, Filtering, Deduplication, and Quality Assessment

#### 6.12.2 Data Mixture, Curriculum, and Multilingual Training

#### 6.12.3 Synthetic Data, Self-Training, and Data Distillation

#### 6.12.4 Model Width, Depth, Vocabulary, and Sequence Length

#### 6.12.5 Continual Learning, Domain Adaptation, and Catastrophic Forgetting

#### 6.12.6 Data Quality, Token Budget, and Scaling Trade-offs

### 6.13 SFT and Parameter-Efficient Fine-Tuning

#### 6.13.1 Instruction Tuning and Conversational Supervision

#### 6.13.2 Full Fine-Tuning and Partial Parameter Updates

#### 6.13.3 Adapter, Prefix Tuning, and Prompt Tuning

#### 6.13.4 LoRA, QLoRA, DoRA, and Low-Rank Adaptation

#### 6.13.5 Multi-Task/Multi-Domain Fine-Tuning

#### 6.13.6 Adapter Merging, Model Merging, and Transfer

### 6.14 Alignment and Preference Learning

#### 6.14.1 Reward Model, Preference Data, and Pairwise Ranking

#### 6.14.2 RLHF and RLAIF

#### 6.14.3 PPO, KL Regularization, and Reference Policy

#### 6.14.4 DPO, IPO, KTO, and Direct Preference Optimization

#### 6.14.5 Rejection Sampling and Best-of-N Data Selection

#### 6.14.6 Safety Alignment, Refusal, and Preference Generalization

### 6.15 Reasoning and RL Post-Training

#### 6.15.1 Verifiable Rewards and RLVR

#### 6.15.2 GRPO, REINFORCE-Style Methods, and Group-Relative Advantage Estimation

#### 6.15.3 DAPO, Reward Shaping, and Sample Filtering

#### 6.15.4 Outcome Reward and Process Reward

#### 6.15.5 On-Policy, Off-Policy, and Importance Sampling

#### 6.15.6 Long Chain-of-Thought, Multi-Turn RL, and Agentic RL

#### 6.15.7 Reward Hacking, Length Bias, and Training Stability

### 6.16 Autoregressive Inference and Sampling

#### 6.16.1 Prefill, Decode, and Token-by-Token Generation

#### 6.16.2 Greedy, Temperature, Top-k, and Top-p

#### 6.16.3 Beam Search, Length Penalty, and Repetition Control

#### 6.16.4 Logits Processor, Stopping Criteria, and Control Tokens

#### 6.16.5 Constrained Decoding, Grammars, and Structured Output

#### 6.16.6 Generation Quality, Diversity, Latency, and Reproducibility

### 6.17 Test-Time Compute and Inference Strategies

#### 6.17.1 Chain-of-Thought and Explicit Reasoning

#### 6.17.2 Self-Consistency, Best-of-N, and Multi-Sample Selection

#### 6.17.3 Verifiers, Reward-Guided Search, and Reranking

#### 6.17.4 Tree Search, Planning, and Multi-Step Problem Solving

#### 6.17.5 Adaptive Reasoning Budget and Early Termination

#### 6.17.6 Inference-Time Scaling and Compute Allocation

### 6.18 Speculative Decoding

#### 6.18.1 The Draft–Verify Framework and Speculative Sampling

#### 6.18.2 Acceptance/Rejection and Target-Distribution Preservation

#### 6.18.3 Independent Draft Models and Self-Speculation

#### 6.18.4 N-Gram, Prompt Lookup, and Retrieval-Based Drafting

#### 6.18.5 The Relationship Between Multi-Token Prediction and Speculative Decoding

#### 6.18.6 Medusa, Hydra, ReDrafter, and Multi-Head/Tree Drafting

#### 6.18.7 [EAGLE, EAGLE-2, and EAGLE-3][eagle3]

#### 6.18.8 [DFlash: Block-Diffusion Drafting][dflash]

#### 6.18.9 [DSpark: Semi-Autoregressive Drafting and Confidence-Scheduled Verification][dspark]

#### 6.18.10 Acceptance Length, Draft Cost, Verification Cost, and the Limits of Speedup

### 6.19 Parallel, Blockwise, and Diffusion Language Generation

#### 6.19.1 Autoregressive, Semi-Autoregressive, and Non-Autoregressive Generation

#### 6.19.2 Blockwise Parallel Decoding and Iterative Refinement

#### 6.19.3 [Set Block Decoding (SBD)][sbd]

#### 6.19.4 Masked Diffusion Language Modeling

#### 6.19.5 LLaDA, LLaDA 2.0, Dream, and Block Diffusion

#### 6.19.6 Token Update Order, Remasking, and Sampling Steps

#### 6.19.7 Trade-offs Between KV Cache Compatibility and Generation Quality

### 6.20 Quantization: Algorithms and Numerical Methods

#### 6.20.1 PTQ, QAT, and Quantization-Aware Distillation

#### 6.20.2 Symmetric/Asymmetric and Uniform/Non-Uniform Quantization

#### 6.20.3 Per-Tensor, Per-Channel, Per-Group, and Per-Token Scaling

#### 6.20.4 Weight, Activation, and KV Cache Quantization

#### 6.20.5 GPTQ, AWQ, SmoothQuant, and Error Compensation

#### 6.20.6 Rotation-Based Quantization: QuaRot and SpinQuant

#### 6.20.7 Outliers, Clipping, Calibration, and Sensitivity Analysis

#### 6.20.8 Mixed Precision, Block Scaling, and Precision Budgets

### 6.21 Sparsification, Pruning, and Model Compression

#### 6.21.1 Unstructured, Structured, and N:M Pruning

#### 6.21.2 Magnitude, Gradient, and Second-Order Pruning

#### 6.21.3 SparseGPT, Wanda, and Post-Training Pruning

#### 6.21.4 Activation Sparsity, Token Pruning, and Early Exit

#### 6.21.5 Head, Layer, and Expert Pruning

#### 6.21.6 Low-Rank Factorization and Structural Compression

#### 6.21.7 Knowledge Distillation, Self-Distillation, and Teacher–Student Learning

### 6.22 Multimodal Foundation Models

#### 6.22.1 Vision Encoder, Projector, and Language Backbone

#### 6.22.2 CLIP/SigLIP, ViT, and Contrastive Learning

#### 6.22.3 LLaVA-Style Alignment and Visual Instruction Tuning

#### 6.22.4 Early Fusion, Late Fusion, and Native Multimodality

#### 6.22.5 Cross-Attention, Image Tokens, and Dynamic Resolution

#### 6.22.6 Audio/Video Tokenization and Cross-Modal Temporal Alignment

#### 6.22.7 ASR, TTS, Codec LMs, and Omni Models

### 6.23 Diffusion, Flow Matching, and Visual Generation

#### 6.23.1 DDPM, DDIM, and Denoising Diffusion

#### 6.23.2 Score-Based Modeling and the Sampling Process

#### 6.23.3 Latent Diffusion and VAEs

#### 6.23.4 U-Net, Diffusion Transformer (DiT), and MMDiT

#### 6.23.5 Flow Matching and Rectified Flow

#### 6.23.6 Classifier-Free Guidance and Conditional Generation

#### 6.23.7 Distillation, Consistency Models, and Few-Step Generation

#### 6.23.8 Video Diffusion, Spatiotemporal Attention, and Long-Video Generation

### 6.24 Retrieval, Tools, and Agent Algorithms

#### 6.24.1 Sparse Retrieval, Dense Retrieval, and Hybrid Retrieval

#### 6.24.2 Embedding Models, Rerankers, and RAG

#### 6.24.3 Retrieval-Augmented Pretraining and Knowledge Updating

#### 6.24.4 Tool Use, Function Calling, and the Action Space

#### 6.24.5 ReAct, Planning, Memory, and Context Compression

#### 6.24.6 Multi-Agent Coordination and Collaborative Problem Solving

#### 6.24.7 Tool Feedback, Environment Rewards, and Agent Training

### 6.25 AI Workloads Beyond LLMs

#### 6.25.1 CNNs, ResNet, and Visual Recognition

#### 6.25.2 Recommendation, DLRM, and Embedding-Heavy Models

#### 6.25.3 Graph Neural Networks and Sparse Message Passing

#### 6.25.4 Speech, Time-Series, and Sequence Models

#### 6.25.5 Vision-Language-Action Models and Robot Policies

#### 6.25.6 Scientific ML, Neural Operators, and Structure Prediction

#### 6.25.7 Compute, Memory, and Communication Characteristics Across Workloads

### 6.26 Communication-Efficient Learning and Distributed Optimization

#### 6.26.1 Local SGD and Periodic Parameter Averaging

#### 6.26.2 Gradient Quantization, Sparsification, and Error Feedback

#### 6.26.3 Low-Rank Gradient Compression and PowerSGD

#### 6.26.4 Asynchronous Training, Staleness, and Convergence

#### 6.26.5 Low-Bandwidth Distributed Pretraining and DiLoCo

#### 6.26.6 Federated Learning, Secure Aggregation, and Differential Privacy

#### 6.26.7 Communication Budget, Statistical Efficiency, and Wall-Clock Training Time

### 6.27 Model Evolution: From Sequence Models to Foundation Models

#### 6.27.1 RNN, LSTM, and Seq2Seq

#### 6.27.2 Attention and the Original Transformer

#### 6.27.3 BERT, T5, and the Pretraining Paradigm

#### 6.27.4 GPT, GPT-2, and GPT-3

#### 6.27.5 InstructGPT and Instruction/Preference Alignment

#### 6.27.6 Dense LM → MoE → Reasoning/Multimodal Models

### 6.28 Model Family: Llama

#### 6.28.1 LLaMA: An Open-Weight Foundation Model

#### 6.28.2 Llama 2: Base and Chat

#### 6.28.3 Llama 3/3.1: Training Scale and Long Context

#### 6.28.4 Llama 3.2/3.3: Model Branches and Capability Evolution

#### 6.28.5 [Llama 4: Public Model Report and Architectural Evolution][llama4]

#### 6.28.6 Comparing Attention, Data Recipes, and Deployment Across the Llama Family

### 6.29 Model Family: Mistral and Mixtral

#### 6.29.1 Mistral 7B and Sliding-Window Attention

#### 6.29.2 Mixtral 8×7B and Sparse MoE

#### 6.29.3 Mixtral 8×22B and Model Scaling

#### 6.29.4 Mistral's Instruction, Code, and Multimodal Branches

#### 6.29.5 Routing, Caching, and Deployment Characteristics of Mistral/Mixtral

### 6.30 Model Family: DeepSeek

#### 6.30.1 DeepSeek LLM and DeepSeekMoE

#### 6.30.2 DeepSeek-V2: MLA and Fine-Grained MoE

#### 6.30.3 DeepSeek-V3: Low-Precision Training, Load Balancing, and MTP

#### 6.30.4 DeepSeek-R1: Reasoning RL and Distillation

#### 6.30.5 DeepSeek-V3.1/V3.2: Reasoning Modes and Sparse Attention

#### 6.30.6 [DeepSeek-V4: Public Model Report and Deployment Requirements][deepseek4]

#### 6.30.7 Model–Kernel–System Co-Design Across the DeepSeek Family

### 6.31 Model Family: Qwen

#### 6.31.1 Qwen2 and Qwen2.5

#### 6.31.2 The Qwen2.5-Coder, Math, VL, and Omni Branches

#### 6.31.3 Qwen3: Dense/MoE and Thinking/Non-Thinking

#### 6.31.4 Qwen3-Next and Hybrid Sequence Modeling

#### 6.31.5 [Qwen3.5: Public Model Report and Architectural Evolution][qwen35]

#### 6.31.6 Comparing Architecture, Post-Training, and Deployment Across the Qwen Family

### 6.32 Model Family: Kimi

#### 6.32.1 Kimi Long-Context Models and Technical Direction

#### 6.32.2 Kimi K1.5 and Multimodal Reasoning RL

#### 6.32.3 Kimi K2 and Large-Scale MoE

#### 6.32.4 Kimi K2 Thinking and Agentic Reasoning

#### 6.32.5 [Kimi K2.5: Public Model Report and Multimodal/Agent Workloads][kimi25]

#### 6.32.6 Attention, Optimizers, and System Requirements Across the Kimi Family

### 6.33 Model Family: GLM

#### 6.33.1 GLM and Autoregressive Blank Infilling Pretraining

#### 6.33.2 ChatGLM and GLM-4

#### 6.33.3 GLM-4.5/4.7 and the Evolution of Agent Capability

#### 6.33.4 [GLM-5: Public Model Report and Complex-Task Workloads][glm5]

#### 6.33.5 The Text, Vision, and Tool-Calling Branches of the GLM Family

### 6.34 Other Model Families and Reading Public Reports

#### 6.34.1 Gemma, Phi, and Small Models/Data Efficiency

#### 6.34.2 OLMo and Open Training Recipes

#### 6.34.3 DBRX, MiniMax, and Other MoE Directions

#### 6.34.4 Stable Diffusion, FLUX, Wan, and Visual Generation

#### 6.34.5 Public Model/System Reports for GPT, Claude, and Gemini

#### 6.34.6 Evidence Boundaries Among Open-Weight, Open-Source, and Closed Models

### 6.35 Model Evaluation and Cross-Layer Trade-offs

#### 6.35.1 Perplexity, Accuracy, and Task Quality

#### 6.35.2 MMLU, GSM8K/MATH, HumanEval, and SWE-bench

#### 6.35.3 Long-Context, Multimodal, and Agent Benchmarks

#### 6.35.4 Pass@k, Success Rate, and Inference Compute Budget

#### 6.35.5 Data Contamination, Judge Bias, and Evaluation Reproducibility

#### 6.35.6 The Quality–Latency–Throughput–Memory–Energy–Cost Pareto Frontier

#### 6.35.7 Distinguishing Algorithmic Improvement, Kernel Speedup, and End-to-End Gain

#### 6.35.8 Model Architecture Change and the Adaptability Range of Deployed Hardware

<!-- Reading references: original references are retained; corpus references are pinned to the revision snapshot. -->

[awesome]: https://github.com/zhaochenyang20/Awesome-ML-SYS-Tutorial "Awesome-ML-SYS-Tutorial"
[tpu]: https://arxiv.org/abs/1704.04760 "In-Datacenter Performance Analysis of a Tensor Processing Unit"
[roofline]: https://doi.org/10.1145/1498765.1498785 "Roofline: An Insightful Visual Performance Model for Multicore Architectures"
[cuda]: https://docs.nvidia.com/cuda/cuda-programming-guide/index.html "NVIDIA CUDA Programming Guide"
[cutlass]: https://docs.nvidia.com/cutlass/latest/overview.html "NVIDIA CUTLASS Documentation"
[triton]: https://triton-lang.org/main/getting-started/tutorials/index.html "Triton Tutorials"
[flashattention]: https://arxiv.org/abs/2205.14135 "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
[mlir]: https://mlir.llvm.org/ "MLIR"
[openxla]: https://openxla.org/xla "OpenXLA"
[jax]: https://docs.jax.dev/en/latest/ "JAX Documentation"
[tvm]: https://tvm.apache.org/docs/ "Apache TVM Documentation"
[vllm]: https://docs.vllm.ai/en/latest/ "vLLM Documentation"
[sglang]: https://docs.sglang.io/ "SGLang Documentation"
[hicache]: https://docs.sglang.io/docs/advanced_features/hicache_design "HiCache System Design and Optimization"
[nsa]: https://arxiv.org/abs/2502.11089 "Native Sparse Attention"
[eagle3]: https://arxiv.org/abs/2503.01840 "EAGLE-3: Scaling up Inference Acceleration of Large Language Models via Training-Time Test"
[dflash]: https://arxiv.org/abs/2602.06036 "DFlash: Block Diffusion for Flash Speculative Decoding"
[dspark]: https://arxiv.org/abs/2607.05147 "DSpark: Confidence-Scheduled Speculative Decoding with Semi-Autoregressive Generation"
[sbd]: https://arxiv.org/abs/2509.04185 "Set Block Decoding is a Language Model Inference Accelerator"
[deepseek4]: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro "DeepSeek-V4-Pro Official Model Card"
[qwen35]: https://huggingface.co/Qwen/Qwen3.5-397B-A17B "Qwen3.5 Official Model Card"
[kimi25]: https://huggingface.co/moonshotai/Kimi-K2.5 "Kimi K2.5 Official Model Card"
[glm5]: https://huggingface.co/zai-org/GLM-5 "GLM-5 Official Model Card"
[llama4]: https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E-Instruct "Llama 4 Official Model Card"
[corpus]: https://github.com/Yufeng98/AI-datacenter/tree/c49a55c6cdbbf387ca8d42bce1fac224f60d5588 "AI Datacenter Accelerator Research Corpus — source snapshot"
[survey-project]: https://yufeng98.github.io/public/blogs/ai-datacenter-survey/ "Survey companion project page"
[corpus-commit]: https://github.com/Yufeng98/AI-datacenter/commit/c49a55c6cdbbf387ca8d42bce1fac224f60d5588 "Corpus snapshot used for this revision"
[chip-nvidia-gpu]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/nvidia-gpu/summary.md
[chip-amd-gpu]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/amd-gpu/summary.md
[chip-biren]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/biren/summary.md
[chip-hygon-dcu]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/hygon-dcu/summary.md
[chip-muxi]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/muxi/summary.md
[chip-mthreads]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/mthreads/summary.md
[chip-tianshu-zhixin]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/tianshu-zhixin/summary.md
[chip-xiwang]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/xiwang/summary.md
[chip-google-tpu]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/google-tpu/summary.md
[chip-aws-neuron]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/aws-neuron/summary.md
[chip-huawei-ascend]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/huawei-ascend/summary.md
[chip-intel-gaudi]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/intel-gaudi/summary.md
[chip-microsoft-maia]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/microsoft-maia/summary.md
[chip-qualcomm]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/qualcomm/summary.md
[chip-cambricon]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/cambricon/summary.md
[chip-alibaba-t-head]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/alibaba-t-head/summary.md
[chip-kunlunxin]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/kunlunxin/summary.md
[chip-furiosa]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/furiosa/summary.md
[chip-sophgo]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/sophgo/summary.md
[chip-vastaitech]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/vastaitech/summary.md
[chip-tecorigin]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/tecorigin/summary.md
[chip-stream-computing]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/stream-computing/summary.md
[chip-tesla-fsd]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/tesla-fsd/summary.md
[chip-openai-broadcom]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/openai-broadcom/summary.md
[chip-tenstorrent]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/tenstorrent/summary.md
[chip-meta-mtia]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/meta-mtia/summary.md
[chip-graphcore]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/graphcore/summary.md
[chip-tesla-dojo]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/tesla-dojo/summary.md
[chip-cerebras]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/cerebras/summary.md
[chip-ibm-spyre]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/ibm-spyre/summary.md
[chip-enflame]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/enflame/summary.md
[chip-preferred-networks-mn-core]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/preferred-networks-mn-core/summary.md
[chip-esperanto]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/esperanto/summary.md
[chip-pezy]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/pezy/summary.md
[chip-sambanova]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/sambanova/summary.md
[chip-rebellions-atom]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/rebellions-atom/summary.md
[chip-tsingmicro]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/tsingmicro/summary.md
[chip-nextsilicon-maverick]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/nextsilicon-maverick/summary.md
[chip-groq]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/groq/summary.md
[chip-etched-sohu]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/etched-sohu/summary.md
[chip-d-matrix]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/d-matrix/summary.md
[chip-sk-hynix-aim]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/sk-hynix-aim/summary.md
[chip-samsung-aquabolt-pim]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/samsung-aquabolt-pim/summary.md
[chip-mythic]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/mythic/summary.md
[chip-untether-ai]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/untether-ai/summary.md
[chip-rain-ai]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/rain-ai/summary.md
[chip-lightmatter]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/lightmatter/summary.md
[chip-q-ant]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/q-ant/summary.md
[chip-luminous]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/luminous/summary.md
[chip-spinncloud-spinnaker2]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/spinncloud-spinnaker2/summary.md
[layers-nvidia-gpu]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/nvidia-gpu/layer-table.md
[layers-amd-gpu]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/amd-gpu/layer-table.md
[layers-google-tpu]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/google-tpu/layer-table.md
[layers-aws-neuron]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/aws-neuron/layer-table.md
[layers-huawei-ascend]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/huawei-ascend/layer-table.md
[layers-tenstorrent]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/tenstorrent/layer-table.md
[layers-graphcore]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/graphcore/layer-table.md
[layers-cerebras]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/cerebras/layer-table.md
[layers-groq]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/groq/layer-table.md
[layers-sambanova]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/sambanova/layer-table.md
[layers-d-matrix]: https://github.com/Yufeng98/AI-datacenter/blob/c49a55c6cdbbf387ca8d42bce1fac224f60d5588/chips/d-matrix/layer-table.md
