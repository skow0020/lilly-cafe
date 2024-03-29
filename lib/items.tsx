import fs from "fs"
import path from "path"
import matter from "gray-matter"

const menuItemsDirectory = path.join(process.cwd(), "menuItems")

export function getMenuItemsData(mealType: string): any {
	const menuItemsDirectory = path.join(process.cwd(), `menuItems/${mealType}`)
	// Get file names under /menuItems
	const fileNames = fs.readdirSync(menuItemsDirectory)

	const allMenuItemsData = fileNames.map(fileName => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, "")

		// Read markdown file as string
		const fullPath = path.join(menuItemsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, "utf8")

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents)

		// Combine the data with the id
		return {
			id,
			...matterResult.data
		}
	})

	return allMenuItemsData
}

export function getAllMenuItemIds(): any {
	const menuFolders = fs.readdirSync(menuItemsDirectory)
	const paths = menuFolders.map(folder => {
		const items = fs.readdirSync(path.join(menuItemsDirectory, folder))
		return items.map(item => {
			return {
				params: {
					id: item.replace(/\.md$/, ""),
					mealType: folder
				}
			}
		})
	})

	return [].concat(...paths)
}
