---
layout: post
title: Our three papers, Zeus, PULSE, and DropoutTS, have been accepted to ICML 2026.
date: 2026-05-01 12:00:00-0000
inline: false
related_posts: false
---

[ICML] Our three papers, Zeus, PULSE, and DropoutTS, have been accepted to ICML 2026, Congrats to all!

---

About Zeus

TITLE: Zeus: Towards Tuning-Free Foundation Model for Time Series Analysis

ABSTRACT: We present Zeus, a unified tuning-free Time Series Foundation Model (TSFM) that delivers superior performance across diverse analysis tasks without any task-specific fine-tuning. Unlike prior studies that primarily focus on zero-shot forecasting but require task-specific tuning for other tasks, Zeus bridges this gap by addressing two fundamental challenges in multi-task generalization. First, to reconcile point-level granularity with long-sequence scalability, Zeus incorporates a multi-scale Transformer featuring point-wise tokenization and a U-shaped hierarchy, effectively balancing fine-grained fidelity with computational efficiency. Second, to accommodate varying inductive biases across different tasks, Zeus introduces Multi-Objective Temporal Masking (MOTM), a unified strategy that supports heterogeneous tasks (e.g., extrapolation, interpolation, and global abstraction) within a single framework. Extensive experiments across five representative tasks demonstrate that Zeus consistently achieves competitive results in tuning-free settings, underscoring its potential as a general-purpose TSFM.

---

About PULSE

TITLE: PULSE: Generative Phase Evolution for Non-Stationary Time Series Forecasting

ABSTRACT: Time series forecasting under non-stationarity faces a fundamental tension between capturing stable representations and adapting to distribution shifts. Existing methods implicitly rely on static historical assumptions, leading to a critical failure mode we term Phase Amnesia, where models become blind to the evolving global context. To resolve this, we formalize non-stationary dynamics through three physical hypotheses: Wold decomposition, dynamical phase evolution, and heteroscedastic manifold generation. These principles inspire PULSE, a physics-informed, plug-and-play framework adopting a Disentangle--Evolve--Simulate design philosophy. Specifically, PULSE utilizes phase-anchored disentanglement to resolve optimization interference caused by dominant trends, employs a Phase Router to actively generate future trajectories, and introduces Statistic-Aware Mixup (SAM) to ensure robustness against out-of-distribution volatility. Empirically, PULSE enables a simple MLP backbone to consistently outperform state-of-the-art Transformers across 12 real-world benchmarks. This validates that a correct physics-informed inductive bias is far more critical than raw architectural complexity for non-stationary forecasting.

---

About DropoutTS

TITLE: DropoutTS: Sample-Adaptive Dropout for Robust Time Series Forecasting

ABSTRACT: Deep time series models are vulnerable to noisy data ubiquitous in real-world applications. Existing robustness strategies either prune data or rely on costly prior quantification, failing to balance effectiveness and efficiency. In this paper, we introduce DropoutTS, a model-agnostic plugin that shifts the paradigm from "what" to learn to "how much" to learn. DropoutTS employs a Sample-Adaptive Dropout mechanism: leveraging spectral sparsity to efficiently quantify instance-level noise via reconstruction residuals, it dynamically calibrates model learning capacity by mapping noise to adaptive dropout rates—selectively suppressing spurious fluctuations while preserving fine-grained fidelity. Extensive experiments across diverse noise regimes and open benchmarks show DropoutTS consistently boosts superior backbones’ performance, delivering advanced robustness with negligible parameter overhead and no architectural modifications.
