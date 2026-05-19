---
layout: post
title: WWW | One WWW 2026 paper about outcome-supervised agentic reasoning for KBQA has been accepted！
date: 2026-01-13 12:00:00-0000
inline: false
related_posts: false
---

WWW \| Our WWW 2026 paper about Knowledge Base Question Answering, entitled ["Incentivizing Agentic Reasoning Capability with Outcome Supervision for KBQA"](https://doi.org/10.1145/3774904.3792662), has been accepted. The paper presents AgenticKBQA, a new framework that strengthens the autonomous reasoning capability of Large Language Models for KBQA through outcome-only supervision.

---
Introduction

Knowledge Base Question Answering (KBQA) aims to answer natural-language questions over structured Knowledge Bases. Recent studies have improved KBQA by introducing an agentic reasoning paradigm, where Large Language Models iteratively decompose questions, generate logical queries, and interact with the Knowledge Base to derive answers. Although effective, existing methods usually rely on fine-tuning with reasoning trajectories constructed through process supervision. This training strategy provides limited incentives for autonomous exploration, which restricts the development of stronger agentic reasoning ability.

To address this issue, we propose AgenticKBQA, a new approach that trains Large Language Models for KBQA under outcome-only supervision. The core idea is to encourage the model to explore reasoning paths autonomously and learn from final answer correctness, instead of depending heavily on pre-defined intermediate trajectories. To build foundational agentic capability, the model is first fine-tuned on a small set of high-quality trajectories selected through outcome-based rejection sampling. Then, to reduce the difficulty caused by sparse rewards in outcome-only supervision, we further introduce a multi-stage curriculum reinforcement learning strategy with reward schedules that gradually move from easy to hard.

Extensive experiments on three mainstream KBQA datasets show that AgenticKBQA consistently outperforms previous methods and exhibits strong autonomous reasoning behaviors. In particular, on the zero-shot subset of GrailQA, AgenticKBQA achieves up to an 11.1% relative improvement while using only one-twelfth of the training data, demonstrating the effectiveness of incentivizing agentic reasoning capability with outcome supervision.