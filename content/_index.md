---
# Leave the homepage title empty to use the site title
title:
date: 2024-10-24
type: landing

sections:
  - block: hero
    content:
      title: "Processing of Advanced Architected Materials"
      image:
        filename: researchthemes.jpg
      text: >
        The PAAM Lab at the [*Faculty of Aerospace Engineering*](https://www.tudelft.nl/lr) at [*Delft University of Technology*](https://www.tudelft.nl) is investigating the structure-processing-property relationship of lightweight architected materials. We combine (self-)assembly, processing and manufacturing methods to architect materials at multiple scales to explore their synergistic properties.

  - block: markdown
    content:
      title:
      subtitle: 
      text: |
        {{% cta cta_link="./permeation_tool/Permeation_Tool.html" cta_text="Permeation Tool" %}} {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '2'

  - block: collection
    content:
      title: Latest Event
      text: ""
      count: 1
      filters:
        folders:
          - event
    design:
      view: card
      columns: '1'
  
# - block: collection
#   content:
#     title: Latest Event
#     subtitle:
#     text:
#     count: 2
#     filters:
#        folders:
#          - event
#       author: ''
#       category: ''
#       exclude_featured: false
#       publication_type: ''
#       tag: ''
#     offset: 0
#     order: desc
#     page_type: post
#   design:
#     view: card
#     columns: '1'

  # - block: markdown
  #   content:
  #     title:
  #     subtitle: ''
  #     text:
  #   design:
  #     columns: '1'
  #     background:
  #       image: 
  #         filename: coders.jpg
  #         filters:
  #           brightness: 1
  #         parallax: false
  #         position: center
  #         size: cover
  #         text_color_light: true
  #     spacing:
  #       padding: ['20px', '0', '20px', '0']
  #     css_class: fullscreen

  - block: collection
    content:
      title: Latest Publications
      text: ""
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'article-journal'
    design:
      view: citation
      columns: '1'

  # - block: markdown
  #   content:
  #     title:
  #     subtitle:
  #     text: |
  #       {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
  #   design:
  #     columns: '1'
---