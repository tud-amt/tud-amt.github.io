---
title: Autoregressive modeling and synthetic generation of high-fidelity, statistically
  equivalent 3D microstructures for as-manufactured misalignments in fiber-reinforced
  composites
authors:
- Mohamad
- Clemens
- Boyang Chen
date: '2027-01-01'
publishDate: '2026-11-12T13:26:31.261127Z'
publication_types:
- article-journal
publication: '*Composites Science and Technology*'
doi: https://doi.org/10.1016/j.compscitech.2026.111912
abstract: Fiber misalignment governs the microscale failure of composites, yet experimentally
  resolved three-dimensional microstructures remain scarce, costly, and specimen-specific,
  limiting high-fidelity virtual testing. This study presents an end-to-end framework
  that turns X-ray-μCT fiber paths into statistically equivalent, physically admissible
  3D microstructures. A developed stochastic model reproduces descriptors by combining
  slice-wise empirical marginals, Gaussian-copula in-plane dependence, latent autoregressive
  depth memory, gated joint-tail enrichment, and a library of rare high-misalignment
  “motifs”, calibrated by Bayesian optimization to a cumulative objective of about
  12.6%. An ablation study isolates each mechanism, with depth memory reducing the
  trajectory-continuity mismatch from over 200% to below 25%. The model transfers
  to an independent sub-volume with matching agreement and 1%–2% run-to-run variability.
  Driven online by the calibrated model, a slice-by-slice growth engine with variable-radius
  seeding, Delaunay-based neighborhoods, and an ellipse-aware projected Gauss–Seidel
  solver generates about 2400 fibers, while a closed-form between-slice capsule check
  certifies non-overlap over the full depth. Parametric studies up to 70% fiber volume
  fraction and 2795 fibers remain strictly overlap-free, and a three-way comparison
  of experimental, modeled, and generated microstructures quantifies the fidelity
  cost of enforcing physical admissibility. The verified microstructures are exported
  as non-intersecting solids importable into finite-element software, opening a scalable
  route to virtual testing, uncertainty quantification, and data-driven composite
  design.
tags:
- Microstructure generation
- Fiber reinforced polymers (FRPs)
- Representative volume elements (RVEs)
- Statistically equivalent
- X-ray-μCT imaging
links:
- name: URL
  url: https://www.sciencedirect.com/science/article/pii/S0266353826003970
---
