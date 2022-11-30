---
title: "Fairness auditing through the lens of Counterfactual Explanations"
collection: publications
permalink: /publication/2023-fairness-ce
excerpt: 'A wide variety of fairness metrics and eXplainable Artificial Intelligence (XAI) approaches have been proposed in the literature to identify bias in machine learning (ML) models that are used in critical real-life contexts. 
In this paper, we present an approach that ties the evaluation of the fairness of machine learning models to the _expense_ (or conversely the simplicity) of generating counterfactual explanations (CFE).
Considering the relative importance of each feature class towards obtaining the desired outcome, we attribute different scores to each feature value and propose model-agnostic concepts of Qualification and Effort, respectively, indicating the candidate\'s strength and the adjustments that must be made to the candidate\'s profile in order to alter the classifier\'s output. 
To ensure a fair comparison, we further group candidates based on their Qualification scores. We additionally utilize KL-divergence to capture the complex disparities between distributions of the CFE Efforts among the sensitive groups. 
We empirically evaluate fairness among different sensitive classes for several classifiers on two real-world datasets. We find that the majority of classifiers exhibit unfair propensities towards the minority groups; however, some models exacerbate the bias more than others. Also, we find that classifiers tend to behave differently for members of different Qualification groups. Our results show that our method can successfully be used for fairness evaluation of classification models based on CFEs.
'
date: 2023-01-01
venue: 'Under Review'
paperurl: ''   
citation: 'Y Deldjoo, M Varasteh, YM Bahram, N Tintarev (2023). &quot;Fairness auditing through the lens of Counterfactual Explanations&quot; <i>yaramohamadi.github.io</i>.'
---


