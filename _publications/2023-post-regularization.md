---
title: "Overfitting is not a dead-end: A survey and outlook on post-training regularization"
collection: publications
permalink: /publication/2023-post-regularization
excerpt: 'Machine learning (ML) relies heavily on regularization, as it allows better generalization to unknown data, even with imperfect optimization procedures and datasets. There are, however, major problems with regularization that have surprisingly received little attention so far. Regularization methods traditionally \textbf{avoid} overfitting. But when overfitting happens, they usually fail to fight it and cannot bring the machine learning model out of its adverse situation. As a result, the stage of overfitting is taught of as a dead-end in the ML community. 
This idea has consequently forced the system designers to perform expensive hyperparameter searches, retraining the model from scratch every time with new configurations. It has also led to similar complications in the ever-changing dynamic usages of static pre-trained models.
Defying the overfitting dead-end misconception, we argue that even a model that is overfitting includes useful information about the task at hand, and being able to adjust the regularization strength by using this information after the overfitting further solidifies this suggestion. 
This process ideally requires the disentanglement of the regularization process from the initial stages of the training phase and being able to apply the regularization as a post-processing step with low cost. This would allow adjusting the regularization strength of pre-trained models efficiently, which is an increasingly viable concept given the prevalent use of large neural networks today in many domains and applications. 
There already are implicit and explicit traces of this idea, which we call \textit{Post-Regularization}, in a wide range of existing works from several domains. However, there exists no unified view of this concept. In this work, we formalize \textit{Post-Regularization}, and provide a novel taxonomy of regularization, from the perspective of \textbf{when} the regularization is applied with respect to the model training to help bring together the ideas that can potentially be further explored in this area. We hope that this work attracts more attention to \textit{Post-Regularization} and provides a foundation for future related work.
'
date: 2023-01-01
venue: 'yaramohamadi.github.io (In preperation, Target: JMLR)'
paperurl: ''
citation: 'YM Bahram, MA Sadeghi (2023). &quot;Post-Regularization: A survey on generalization after overfitting&quot; <i>yaramohamadi.github.io</i>'
---
