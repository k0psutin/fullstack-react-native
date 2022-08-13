import RepositoryList from "../../components/Repositories/RepositoryList";
import { render } from '@testing-library/react-native'
import { convertThousands } from "../../helpers/textHelpers";

describe('RepositoryList', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        }

        const repositoryNodes = repositories.edges.map((edge) => edge.node)
        const nodeKeys = Object.keys(repositoryNodes[0]).slice(1).slice(0, -1)

        const { getAllByTestId } = render(<RepositoryList repositories={repositoryNodes} />)

        const repositoryItems = getAllByTestId('repositoryItem')

        for (let i = 0; i < repositoryNodes.length; i++) {
            repositoryItems[i]
            nodeKeys.forEach((key) => {
                let value = repositoryNodes[i][key]

                if (!isNaN(Number(value))) {
                    value = convertThousands(value)
                }
                expect(repositoryItems[i]).toHaveTextContent(value)
            })
        }

      });
  });