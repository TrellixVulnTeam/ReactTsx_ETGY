import path from "path";
import { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const Respath = (_path) => path.resolve(__dirname, _path);

// const webpackConfig = (): Configuration => ({
module.exports = {
	entry: "./src/App.tsx",
	mode: "development",
	output: {
		path: Respath("./build"),
		filename: "build.js",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: {
					// 项目编译时就不会进行类型检查，也不会输出声明文件
					// transpileOnly: true,
				},
				exclude: /build/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: "style-loader" }, // to inject the result into the DOM as a style block
					{ loader: "css-modules-typescript-loader" }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
					{ loader: "css-loader", options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
					{ loader: "sass-loader" }, // to convert SASS to CSS
					// NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
				],
			},
			// {
			//   test: /\.scss$/,
			//   use: ["style-loader", "css-loader","sass-loader"],
			// },
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
		plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
	},
	devServer: {
		port: 3000,
		open: true,
		hot: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			// HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
			// template: "./public/index.html",
			title: "等等等等",
			// filename:'say.html',
			template: "./public/index.html",
		}),
		// DefinePlugin allows you to create global constants which can be configured at compile time
		new DefinePlugin({
			"process.env": process.env.production || !process.env.development,
		}),
	],
};
// export default webpackConfig
