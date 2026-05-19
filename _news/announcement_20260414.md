---
layout: post
title: One SIGIR 2026 paper about Knowledgeable Deep Research and Hybrid Knowledge Analysis has been accepted！
date: 2026-04-14 12:00:00-0000
inline: false
related_posts: false
---

[SIGIR] Our SIGIR 2026 paper about Knowledgeable Deep Research, entitled ["Knowledgeable Deep Research: Hybrid Knowledge Analysis for Structured and Unstructured Information Integration"](https://arxiv.org/abs/2604.07720), has been accepted. The paper introduces a new deep research task that jointly leverages structured and unstructured knowledge, together with a multi-agent framework that generates coherent multimodal reports with texts, figures, and tables.

---
Introduction

Deep Research (DR) requires Large Language Model agents to autonomously perform multi-step information seeking, processing, and reasoning in order to generate comprehensive reports. Existing studies mainly focus on unstructured web content. However, a more challenging and practical deep research setting should also make use of structured knowledge, which can provide a reliable data foundation, support quantitative computation, and enable deeper analysis. To this end, we define a new task called Knowledgeable Deep Research (KDR), which requires deep research agents to generate reports based on both structured and unstructured knowledge.

To address this task, we propose Hybrid Knowledge Analysis (HKA), a multi-agent framework that reasons jointly over structured and unstructured information and integrates texts, figures, and tables into coherent multimodal reports. A key component of the framework is the Structured Knowledge Analyzer, which combines coding models and vision-language models to generate figures and tables, together with corresponding analytical insights. This design enables the system to better process structured resources and present knowledge in a more interpretable and informative way.

To support systematic evaluation, we further construct KDR-Bench, a benchmark that covers 9 domains and includes 41 expert-level questions, along with a large collection of structured knowledge resources such as 1,252 tables. For each question, we annotate the main conclusions and key points, and we propose three categories of evaluation metrics, including general-purpose metrics, knowledge-centric metrics, and vision-enhanced metrics. Experimental results show that HKA consistently outperforms most existing deep research agents on general-purpose and knowledge-centric metrics, and even surpasses the Gemini DR agent on vision-enhanced metrics. These results demonstrate the effectiveness of HKA for deep and structure-aware knowledge analysis, and we hope this work can provide a useful foundation for future multimodal deep research studies.