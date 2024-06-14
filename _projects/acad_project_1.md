---
layout: page
title: Simulation of Quantum Image Steganography
description: a project with a background image
img: assets/img/acad_project_1/QuStegOverview.png
importance: 1
category: Academic
---

In today's digital age, secure transmission of sensitive data is of paramount importance. This project, titled "Secure Data Transmission Using Quantum Image Steganography," leverages advanced techniques in quantum computing and image processing to develop a robust and secure method for data transmission. The project was conducted as part of the Bachelor of Engineering in Electronics & Communication Engineering at Dayananda Sagar College of Engineering, Bengaluru, under the guidance of Dr. S. Thenmozhi, Associate Professor, ECE Dept., DSCE, Bengaluru.

## Introduction

The project focuses on secure data transmission by embedding a quantum secret image into a quantum cover image using advanced steganographic techniques. The combination of quantum computing and image processing enhances security and efficiency in data transmission.

## Objectives

- To develop a secure data transmission method using quantum image steganography.
- To implement quantum image representation and scrambling techniques.
- To ensure high visual quality and payload capacity for the stego-image.

## Methodology

The project methodology is divided into several key phases:

1. Quantum Image Representation: Utilizing the Novel Enhanced Quantum Representation (NEQR) method.
2. Image Scrambling: Implementing Arnold and Fibonacci image scrambling techniques for encrypting the secret image.
3. Embedding: Embedding the scrambled quantum secret image into the quantum cover image using two least significant qubits (LSQb).
4. Extraction: Extracting and descrambling the secret image from the stego-image using inverse transformations.

## Tools

- **MATLAB**: Used for simulation and implementation of the proposed steganography scheme

## Results and Discussion

### Visual Quality

The proposed scheme maintains high visual quality of the stego-image, as indicated by Peak Signal-to-Noise Ratio (PSNR) values ranging between 42 and 43 dB, ensuring that the alterations are imperceptible to the naked eye.

### Payload Capacity

The scheme supports a payload capacity of 2 bits per pixel, providing sufficient space for embedding the secret image while maintaining the integrity of the cover image.

### Security

The use of quantum scrambling techniques significantly enhances the security of the embedded data, making it resistant to common steganalysis attacks.

### Comparison

The proposed scheme demonstrates superior performance in terms of visual quality and payload capacity when compared to traditional steganography techniques.

## Conclusion and Future Work

This project successfully demonstrates a novel approach to secure data transmission using quantum image steganography. Future work may involve exploring more efficient quantum algorithms and extending the methodology to other types of multimedia data.

For more detailed information on the project, feel free to reach out to me.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
