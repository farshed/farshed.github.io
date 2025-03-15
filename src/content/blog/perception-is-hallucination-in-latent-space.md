---
title: 'Perception is hallucination in latent space'
description: 'Convolutional Neural Networks mimic how brain processes information'
pubDate: 'December 29 2024'
---

> Do not try and bend the spoon. That's impossible. Instead, only try to realize the truth... There is no spoon. Then you'll see that it is not the spoon that bends, it is only yourself.
> **The bald kid from The Matrix (1999)**

In 1959, David Hubel and Torsten Wiesel, two Harvard neuroscientists, conducted a series of experiments on anesthetized cats to understand how visual perception works in animals.

They [found](https://pmc.ncbi.nlm.nih.gov/articles/PMC1363130/) that neurons in the visual cortex were specialized to detect features like specific orientations, shapes, and movements. These cells had "receptive fields" organized into excitatory and inhibitory regions which filtered and highlighted patterns, very much like a convolutional algorithm.

This discovery was the first real proof that we don’t passively absorb light and form an internal image of the world like a camera. Instead, the visual system extracts meaningful statistical patterns and constructs a _representation_.

We think we see RGB pixels but we actually see in representation space.

## Vision is inference, not perception

This should be obvious to anyone who’s ever dabbled in psychedelics or suffered from visual hallucinations.

Take Charles Bonnet syndrome where people who’ve gone blind report vivid, hyperreal hallucinations of faces, animals, or geometric patterns. Why? Because the brain expects visual input and, when it doesn’t get any, it just makes something up using its built-in priors.

Even in normal vision, perception is an act of inference. Ever notice how you "see" a coherent world even though our eyes constantly jitter around? These tiny movements (called microsaccades) prevent photoreceptors from adapting to a static scene. Without them, our vision would fade to a gray blur, because neurons only fire when detecting _change_.

This key takeaway is that the visual cortex doesn't capture images. It's continuously performing _edge detection, contrast enhancement, and hierarchical feature extraction_, just like a convolutional neural network (CNN).

This is not by coincidence but because CNN development was heavily influenced by biological vision research.

The original CNN architecture (LeCun's [LeNet-5](https://en.wikipedia.org/wiki/LeNet)) was explicitly inspired by the hierarchical processing in the visual cortex, particularly Hubel & Wiesel's work on receptive fields in cat vision. The whole idea of local receptive fields, weight sharing, and hierarchical feature extraction was drawn from neuroscience.

## The Bayesian brain

Our brain is always generating an internal model of reality. In complete darkness, one doesn’t experience "nothing". The visual system still produces [phosphenes](https://en.wikipedia.org/wiki/Phosphene) or imagined patterns.

Hallucinations (from psychedelics, sensory deprivation, etc.) happen when this internal model isn’t properly constrained. Sensory input acts as a feedback mechanism, preventing the brain from drifting into pure fantasy.

Bayesian brain hypothesis formalizes perception as Bayesian inference:

- **Prior beliefs** (Your brain’s expectations)
- **Likelihood** (Incoming sensory data)
- **Posterior** (Your final perception, which combines both)

## Hallucinations and adversarial attacks

If perception is inference, what happens when the priors get distorted?

- Psychedelics disrupt hierarchical processing, allowing low-level feature maps to bleed into conscious awareness. This is why trippy visuals resemble [DeepDream](http://googleresearch.blogspot.ch/2015/06/inceptionism-going-deeper-into-neural.html) images (both are cases of pattern-extractors running unchecked).
- Optical illusions exploit the brain’s reliance on heuristics. For example, the [Adelson checker shadow illusion](https://en.wikipedia.org/wiki/Checker_shadow_illusion) tricks us into seeing two identical colors as different because our visual system compensates for shadows.
- Adversarial examples in AI betray the fragility of convolutional representations. Tweak a few pixels, and a CNN confidently misclassifies a panda as a gibbon. Disturb a human’s priors in the right way (say, with a warped face in the [uncanny valley](https://en.wikipedia.org/wiki/Uncanny_valley)), and the effect is just as disorienting.

## All cognition is convolutional

Vision is just one example. The mammalian brain’s entire approach to information processing is based on filtering, compressing, and pattern-matching.

- Memory's not like a markdown document with details and images and sound. Instead, it’s a generative model that reconstructs past experiences from stored features.
- The auditory cortex detects spectrotemporal patterns (like the harmonic structure of speech) instead of processing raw sound waveforms.
- Even language comprehension is hierarchical: Words form phrases, phrases form sentences, and meaning emerges at higher levels.

So yeah, _all of perception, thought, and memory is a recursive, hierarchical search for patterns in raw data._
