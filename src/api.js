export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://shiny-star-ad2etest-api.fanshihao1999.workers.dev'

export async function request(path, options = {}) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const response = await fetch(`${API_BASE_URL}${normalizedPath}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      typeof data?.error === 'string' ? data.error : `Request failed: ${response.status}`
    )
  }

  return data
}

export async function chatWithOpenAI(message) {
  return request('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message }),
  })
}
