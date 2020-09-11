import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"

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

export async function getMenuItemData(id: string): Promise<any> {
	const fullPath = path.join(menuItemsDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, "utf8")

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents)

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content)
	const contentHtml = processedContent.toString()

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml,
		...matterResult.data
	}
}
