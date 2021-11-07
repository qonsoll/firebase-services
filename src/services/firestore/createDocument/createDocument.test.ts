import createDocument from './createDocument'
import firebase from 'config/firebase'

const TEST_COLLECTION = 'users'

const TEST_DATA = {
  name: 'Maxim',
  age: 19,
  isTester: true,
  budget: 0,
  haveHouse: false,
  avatarUrl: null
}

describe('createDocument function', () => {
  test('Basic usage', async () => {
    const data = await createDocument<typeof TEST_DATA, any>(
      firebase.firestore(),
      TEST_COLLECTION,
      TEST_DATA
    )

    expect(data.name).toBeDefined()
    expect(data.id).toBeDefined()
    expect(data.age).toBeDefined()
    expect(data.isTester).toBeDefined()
    expect(data.budget).toBeFalsy()
    expect(data.haveHouse).toBeFalsy()
    expect(data.avatarUrl).toBeUndefined()
  })

  describe('Test for option.id', () => {
    const id = 'testId'
    test(`Custom id = ${id}`, async () => {
      const data = await createDocument(
        firebase.firestore(),
        TEST_COLLECTION,
        TEST_DATA,
        { id }
      )

      expect(data.id).toBe(id)
    })
  })

  describe('Test for option.idField', () => {
    const idField = 'testIdField'
    test(`Custom name of id filed = ${idField}`, async () => {
      const data = await createDocument(
        firebase.firestore(),
        TEST_COLLECTION,
        TEST_DATA,
        { idField }
      )
      expect(data).toHaveProperty(idField)
    })
    test('idField not string', async () => {
      const errorCall = () => {
        return createDocument(
          firebase.firestore(),
          TEST_COLLECTION,
          TEST_DATA,
          {
            idField: true
          }
        )
      }
      expect(errorCall).rejects.toThrowError(
        'idField must be a string | undefined | null | false'
      )
    })
    test('idField disabled', async () => {
      const data = await createDocument(
        firebase.firestore(),
        TEST_COLLECTION,
        TEST_DATA,
        {
          idField: false
        }
      )
      expect(data.id).toBeUndefined()
    })
  })

  describe('Tests for option.withoutUndef', () => {
    expect(TEST_DATA.avatarUrl).toBeNull()
    expect(TEST_DATA.budget).toBe(0)

    const testOption = (combine: string | boolean = 'id') => {
      test('TEST_DATA should be without undefined | null field, but include another falsy values.', async () => {
        const data = await createDocument(
          firebase.firestore(),
          TEST_COLLECTION,
          TEST_DATA,
          { idField: combine }
        )
        expect(data.haveHouse).toBe(false)
        expect(data.budget).toBe(0)
        expect(data.avatarUrl).toBeUndefined()
      })
      test('TEST_DATA should contain all falsy values.', async () => {
        const data = await createDocument(
          firebase.firestore(),
          TEST_COLLECTION,
          TEST_DATA,
          { withoutUndef: false, idField: combine }
        )
        expect(data.haveHouse).toBe(false)
        expect(data.budget).toBe(0)
        expect(data.avatarUrl).toBeNull()
      })
    }
    testOption()

    describe('Combine with option.idField', () => {
      testOption(false)
    })
  })
})
