import React from "react"
import CMS from "netlify-cms-app"
import { MdxControl, setupPreview } from "netlify-cms-widget-mdx"

// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import Code from "../components/code/code"
import { Drop, A, Video, Tweet } from "../components/mdx"
import withStyledComponents from "./hooks/withStyledComponents"
import PostPreview from "./preview-templates/post-preview"
import DropPreview from "./preview-templates/drop-preview"

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("blog", withStyledComponents(PostPreview))
CMS.registerPreviewTemplate("drops", withStyledComponents(DropPreview))

CMS.registerWidget(
  "mdx",
  MdxControl,
  setupPreview({
    components: {
      code: Code,
      pre: (props) => <code {...props} />,
      a: (props) => <A {...props} />,
    },
    scope: {
      Drop,
      Video,
      Tweet,
    },
    mdPlugins: [],
  })
)
