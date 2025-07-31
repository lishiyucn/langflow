module.exports = {
  docs: [
    "Get-Started/welcome-to-langflow",
    {
      type: "category",
      label: "快速开始",
      items: [
        {
          type: "doc",
          id: "Get-Started/about-langflow",
          label: "关于 Langflow"
        },
        {
          type: "doc",
          id: "Get-Started/get-started-installation",
          label: "安装 Langflow"
        },
        {
          type: "doc",
          id: "Get-Started/get-started-quickstart",
          label: "快速入门"
        },
        {
          type: "category",
          label: "教程",
          items: [
            "Tutorials/chat-with-rag",
            "Tutorials/chat-with-files",
            "Tutorials/agent",
            "Tutorials/mcp-tutorial",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "流程",
      items: [
        {
          type: "doc",
          id: "Concepts/concepts-overview",
          label: "使用可视化编辑器"
        },
        {
          type: "doc",
          id: "Concepts/concepts-flows",
          label: "构建流程"
        },
        {
          type: "category",
          label: "流程模板",
          items: [
            'Templates/basic-prompting',
            'Templates/simple-agent',
            'Templates/blog-writer',
            'Templates/document-qa',
            'Templates/memory-chatbot',
            'Templates/vector-store-rag',
            'Templates/financial-report-parser',
            'Templates/sequential-agent',
            'Templates/travel-planning-agent',
          ],
        },
        {
          type: "category",
          label: "运行流程",
          items: [
            {
              type: "doc",
              id: "Concepts/concepts-publish",
              label: "使用 Langflow API 触发流程"
            },
            {
              type: "doc",
              id: "Develop/webhook",
              label: "使用 Webhook 触发流程"
            },
          ],
        },
        {
          type: "doc",
          id: "Concepts/concepts-playground",
          label: "测试流程"
        },
        {
          type: "doc",
          id: "Concepts/concepts-flows-import",
          label: "导入和导出流程"
        },
      ],
    },
    {
      type: "category",
      label: "智能体",
      items: [
        "Agents/agents",
        "Agents/agents-tools",
      ],
    },
    {
      type: "category",
      label: "模型上下文协议 (MCP)",
      items: [
        "Components/mcp-client",
        "Concepts/mcp-server",
        "Integrations/mcp-component-astra",
      ],
    },
    {
      type: "category",
      label: "开发",
      items: [
        {
          type: "doc",
          id: "Develop/install-custom-dependencies",
          label: "安装自定义依赖"
        },
        "Configuration/configuration-api-keys",
        "Configuration/configuration-authentication",
        "Configuration/configuration-global-variables",
        "Configuration/environment-variables",
        {
          type: "category",
          label: "存储和内存",
          items: [
            {
              type: "doc",
              id: "Concepts/concepts-file-management",
              label: "管理文件"
            },
            {
              type: "doc",
              id: "Develop/memory",
              label: "管理内存"
            },
            {
              type: "doc",
              id: "Develop/session-id",
              label: "使用 Session ID"
            },
            "Configuration/configuration-custom-database",
          ],
        },
        {
          type: "category",
          label: "可观测性",
          items: [
            "Develop/logging",
            "Integrations/Arize/integrations-arize",
            "Integrations/integrations-langfuse",
            "Integrations/integrations-langsmith",
            "Integrations/integrations-langwatch",
            "Integrations/integrations-opik",
            "Contributing/contributing-telemetry",
          ],
        },
        {
          type: "doc",
          id: "Concepts/data-types",
          label: "使用 Langflow 数据类型"
        },
        {
          type: "doc",
          id: "Concepts/concepts-voice-mode",
          label: "使用语音模式"
        },
        {
          type: "doc",
          id: "Configuration/configuration-cli",
          label: "使用 Langflow CLI"
        },
      ],
    },
    {
      type: "category",
      label: "部署",
      items: [
        {
          type:"doc",
          id: "Deployment/deployment-overview",
          label: "Langflow 部署概述"
        },
        {
          type: "doc",
          id: "Deployment/deployment-public-server",
          label: "部署公共 Langflow 服务器"
        },
        {
          type: "category",
          label: "容器化部署",
          items: [
            "Develop/develop-application",
            {
              type: "doc",
              id: "Deployment/deployment-docker",
              label: "Langflow Docker 镜像"
            },
            {
              type: "doc",
              id: "Deployment/deployment-caddyfile",
              label: "在远程服务器上部署 Langflow"
            },
            {
              type: "category",
              label: "Kubernetes",
              items: [
                {
                  type: "doc",
                  id: "Deployment/deployment-prod-best-practices",
                  label: "Langflow 架构和最佳实践"
                },
                {
                  type: "doc",
                  id: "Deployment/deployment-kubernetes-dev",
                  label: "开发环境部署"
                },
                {
                  type: "doc",
                  id: "Deployment/deployment-kubernetes-prod",
                  label: "生产环境部署"
                }
              ]
            },
            {
              type: "doc",
              id: "Deployment/deployment-gcp",
              label: "Google Cloud Platform"
            },
            {
              type: "doc",
              id: "Deployment/deployment-hugging-face-spaces",
              label: "Hugging Face Spaces"
            },
            {
              type: "doc",
              id: "Deployment/deployment-railway",
              label: "Railway"
            },
            {
              type: "doc",
              id: "Deployment/deployment-render",
              label: "Render"
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "组件参考",
      items: [
        "Concepts/concepts-components",
        {
          type: "category",
          label: "核心组件",
          items: [
            "Components/components-io",
            "Components/components-agents",
            {
              type: "category",
              label: "模型",
              items: [
                "Components/components-models",
                "Components/components-embedding-models",
              ]
            },
            "Components/components-data",
            "Components/components-vector-stores",
            {
              type: "category",
              label: "处理",
              items: [
                "Components/components-processing",
                "Components/components-prompts",
              ]
            },
            "Components/components-logic",
            "Components/components-helpers",
            "Components/components-tools",
            "Components/components-memories",
          ],
        },
        {
          type: "category",
          label: "组件包",
          items: [
            "Components/components-bundles",
            "Components/bundles-aiml",
            "Components/bundles-amazon",
            "Components/bundles-anthropic",
            "Integrations/Apify/integrations-apify",
            "Components/bundles-arxiv",
            "Integrations/integrations-assemblyai",
            "Components/bundles-azure",
            "Components/bundles-baidu",
            "Components/bundles-bing",
            "Integrations/Cleanlab/integrations-cleanlab",
            "Components/bundles-cloudflare",
            "Components/bundles-cohere",
            "Integrations/Composio/integrations-composio",
            "Components/bundles-datastax",
            "Components/bundles-deepseek",
            "Integrations/Docling/integrations-docling",
            "Components/bundles-duckduckgo",
            "Components/bundles-exa",
            "Components/bundles-glean",
            {
              type: 'category',
              label: 'Google',
              items: [
                "Components/bundles-google",
                "Integrations/Google/integrations-google-big-query",
              ],
            },
            "Components/bundles-groq",
            "Components/bundles-huggingface",
            "Components/bundles-ibm",
            "Components/bundles-icosacomputing",
            "Components/bundles-langchain",
            "Components/bundles-lmstudio",
            "Components/bundles-maritalk",
            "Components/bundles-mem0",
            "Components/bundles-mistralai",
            {
              type: "category",
              label: "Notion",
              items: [
                "Integrations/Notion/integrations-notion",
                "Integrations/Notion/notion-agent-conversational",
                "Integrations/Notion/notion-agent-meeting-notes",
              ],
            },
            "Components/bundles-novita",
            {
              type: "category",
              label: "NVIDIA",
              items: [
                "Components/bundles-nvidia",
                {
                  type: "doc",
                  id: "Integrations/Nvidia/integrations-nvidia-ingest",
                  label: "NVIDIA Ingest"
                },
                {
                  type: "doc",
                  id: "Integrations/Nvidia/integrations-nvidia-nim-wsl2",
                  label: "NVIDIA NIM on WSL2"
                },
                {
                  type: "doc",
                  id: "Integrations/Nvidia/integrations-nvidia-g-assist",
                  label: "NVIDIA G-Assist"
                },
              ],
            },
            "Components/bundles-ollama",
            "Components/bundles-openai",
            "Components/bundles-openrouter",
            "Components/bundles-perplexity",
            "Components/bundles-redis",
            "Components/bundles-sambanova",
            "Components/bundles-searchapi",
            "Components/bundles-vertexai",
            "Components/bundles-wikipedia",
            "Components/bundles-xai",
          ],
        },
        "Components/components-custom-components",
      ],
    },
    {
      type: "category",
      label: "API 参考",
      items: [
        {
          type: "doc",
          id: "API-Reference/api-reference-api-examples",
          label: "开始使用 Langflow API",
        },
        {
          type: "doc",
          id: "Develop/Clients/typescript-client",
          label: "使用 TypeScript 客户端"
        },
        {
          type: "doc",
          id: "API-Reference/api-flows-run",
          label: "流程触发端点",
        },
        {
          type: "doc",
          id: "API-Reference/api-flows",
          label: "流程管理端点",
        },
        {
          type: "doc",
          id: "API-Reference/api-files",
          label: "文件端点",
        },
        {
          type: "doc",
          id: "API-Reference/api-projects",
          label: "项目端点",
        },
        {
          type: "doc",
          id: "API-Reference/api-logs",
          label: "日志端点",
        },
        {
          type: "doc",
          id: "API-Reference/api-monitor",
          label: "监控端点",
        },
        {
          type: "doc",
          id: "API-Reference/api-build",
          label: "构建端点",
        },
        {
          type: "doc",
          id: "API-Reference/api-users",
          label: "用户端点",
        },
        {
          type: "link",
          label: "Langflow API 规范",
          href: "/api",
        },
      ],
    },
    {
      type: "category",
      label: "贡献",
      items: [
        "Contributing/contributing-community",
        "Contributing/contributing-how-to-contribute",
        "Contributing/contributing-components",
        "Contributing/contributing-component-tests",
        "Contributing/contributing-templates",
        "Contributing/contributing-bundles",
      ],
    },
    {
      type: "category",
      label: "发布说明",
      items: [
        {
          type: "doc",
          id: "Support/release-notes",
          label: "发布说明",
        },
      ],
    },
    {
      type: "category",
      label: "支持",
      items: [
        {
          type: "doc",
          id: "Support/troubleshooting",
          label: "故障排除",
        },
        {
          type: "doc",
          id: "Contributing/contributing-github-issues",
          label: "获取帮助和请求功能增强",
        },
        {
          type: "doc",
          id: "Support/luna-for-langflow",
          label: "企业支持",
        },
      ],
    },
    {
      type: "html",
      className: "sidebar-ad",
      value: `
        <a href="https://www.langflow.org/desktop" target="_blank" class="menu__link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1645_37)">
              <path d="M12 17H20C21.1046 17 22 16.1046 22 15V13M12 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3H10M12 17V21M8 21H12M12 21H16M11.75 10.2917H13.2083L16.125 7.375H17.5833L20.5 4.45833H21.9583M16.125 11.75H17.5833L20.5 8.83333H21.9583M11.75 5.91667H13.2083L16.125 3H17.5833" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_1645_37">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <div class="sidebar-ad-text-container">
            <span class="sidebar-ad-text">几分钟即可开始</span>
            <span class="sidebar-ad-text sidebar-ad-text-gradient">下载 Langflow Desktop</span>
          </div>
        </a>
      `,
    },
  ],
};
