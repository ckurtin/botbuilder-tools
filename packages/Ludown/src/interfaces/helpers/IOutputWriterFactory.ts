/**
 * @description
 * Represents an interface for any data reader
 */
export interface IOutputWriter {
	write(data: string): Promise<void>;
}

/**
 * @description
 * Represents a factory that creates output writers.
 */
export type IOutputWriterFactory = (dirPath?: string, filePath?: string) => IOutputWriter;