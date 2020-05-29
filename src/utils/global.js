import urljoin from 'url-join'
import moment from 'moment'
import config from '../../data/SiteConfig'

const formatDate = date => moment.utc(date).locale('id').format(config.dateFormat)

const editOnGithub = post => {
  const date = moment.utc(post.date).locale('id').format(config.dateFromFormat)
  return urljoin(config.repo, '/blob/master/content/posts', `${date}-${post.slug}.md`)
}

export { formatDate, editOnGithub }
