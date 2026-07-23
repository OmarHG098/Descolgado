import { createClient, type SanityClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from './env'

let client: SanityClient | undefined

// Lazy: constructing the client throws immediately if projectId is unset
// (e.g. before the Sanity project has been created), so defer until use.
export function getClient(): SanityClient {
  client ??= createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  })
  return client
}
