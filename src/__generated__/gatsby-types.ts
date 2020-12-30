/* eslint-disable */

declare namespace GatsbyTypes {
  type Maybe<T> = T | undefined;
  type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: string;
    JSON: never;
  };

  type BooleanQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Boolean']>;
    readonly ne: Maybe<Scalars['Boolean']>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  };

  type DateQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Date']>;
    readonly ne: Maybe<Scalars['Date']>;
    readonly gt: Maybe<Scalars['Date']>;
    readonly gte: Maybe<Scalars['Date']>;
    readonly lt: Maybe<Scalars['Date']>;
    readonly lte: Maybe<Scalars['Date']>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  };

  type Directory = Node & {
    readonly sourceInstanceName: Scalars['String'];
    readonly absolutePath: Scalars['String'];
    readonly relativePath: Scalars['String'];
    readonly extension: Scalars['String'];
    readonly size: Scalars['Int'];
    readonly prettySize: Scalars['String'];
    readonly modifiedTime: Scalars['Date'];
    readonly accessTime: Scalars['Date'];
    readonly changeTime: Scalars['Date'];
    readonly birthTime: Scalars['Date'];
    readonly root: Scalars['String'];
    readonly dir: Scalars['String'];
    readonly base: Scalars['String'];
    readonly ext: Scalars['String'];
    readonly name: Scalars['String'];
    readonly relativeDirectory: Scalars['String'];
    readonly dev: Scalars['Int'];
    readonly mode: Scalars['Int'];
    readonly nlink: Scalars['Int'];
    readonly uid: Scalars['Int'];
    readonly gid: Scalars['Int'];
    readonly rdev: Scalars['Int'];
    readonly ino: Scalars['Float'];
    readonly atimeMs: Scalars['Float'];
    readonly mtimeMs: Scalars['Float'];
    readonly ctimeMs: Scalars['Float'];
    readonly atime: Scalars['Date'];
    readonly mtime: Scalars['Date'];
    readonly ctime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars['Float']>;
    readonly blksize: Maybe<Scalars['Int']>;
    readonly blocks: Maybe<Scalars['Int']>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type Directory_modifiedTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_accessTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_changeTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_birthTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_atimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_mtimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type Directory_ctimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type DirectoryConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<DirectoryGroupConnection>;
  };

  type DirectoryConnection_distinctArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: DirectoryFieldsEnum;
  };

  type DirectoryEdge = {
    readonly next: Maybe<Directory>;
    readonly node: Directory;
    readonly previous: Maybe<Directory>;
  };

  enum DirectoryFieldsEnum {
    sourceInstanceName = 'sourceInstanceName',
    absolutePath = 'absolutePath',
    relativePath = 'relativePath',
    extension = 'extension',
    size = 'size',
    prettySize = 'prettySize',
    modifiedTime = 'modifiedTime',
    accessTime = 'accessTime',
    changeTime = 'changeTime',
    birthTime = 'birthTime',
    root = 'root',
    dir = 'dir',
    base = 'base',
    ext = 'ext',
    name = 'name',
    relativeDirectory = 'relativeDirectory',
    dev = 'dev',
    mode = 'mode',
    nlink = 'nlink',
    uid = 'uid',
    gid = 'gid',
    rdev = 'rdev',
    ino = 'ino',
    atimeMs = 'atimeMs',
    mtimeMs = 'mtimeMs',
    ctimeMs = 'ctimeMs',
    atime = 'atime',
    mtime = 'mtime',
    ctime = 'ctime',
    birthtime = 'birthtime',
    birthtimeMs = 'birthtimeMs',
    blksize = 'blksize',
    blocks = 'blocks',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
  }

  type DirectoryFilterInput = {
    readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
    readonly absolutePath: Maybe<StringQueryOperatorInput>;
    readonly relativePath: Maybe<StringQueryOperatorInput>;
    readonly extension: Maybe<StringQueryOperatorInput>;
    readonly size: Maybe<IntQueryOperatorInput>;
    readonly prettySize: Maybe<StringQueryOperatorInput>;
    readonly modifiedTime: Maybe<DateQueryOperatorInput>;
    readonly accessTime: Maybe<DateQueryOperatorInput>;
    readonly changeTime: Maybe<DateQueryOperatorInput>;
    readonly birthTime: Maybe<DateQueryOperatorInput>;
    readonly root: Maybe<StringQueryOperatorInput>;
    readonly dir: Maybe<StringQueryOperatorInput>;
    readonly base: Maybe<StringQueryOperatorInput>;
    readonly ext: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
    readonly dev: Maybe<IntQueryOperatorInput>;
    readonly mode: Maybe<IntQueryOperatorInput>;
    readonly nlink: Maybe<IntQueryOperatorInput>;
    readonly uid: Maybe<IntQueryOperatorInput>;
    readonly gid: Maybe<IntQueryOperatorInput>;
    readonly rdev: Maybe<IntQueryOperatorInput>;
    readonly ino: Maybe<FloatQueryOperatorInput>;
    readonly atimeMs: Maybe<FloatQueryOperatorInput>;
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
    readonly atime: Maybe<DateQueryOperatorInput>;
    readonly mtime: Maybe<DateQueryOperatorInput>;
    readonly ctime: Maybe<DateQueryOperatorInput>;
    readonly birthtime: Maybe<DateQueryOperatorInput>;
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly blksize: Maybe<IntQueryOperatorInput>;
    readonly blocks: Maybe<IntQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type DirectoryGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type DirectorySortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type DuotoneGradient = {
    readonly highlight: Scalars['String'];
    readonly shadow: Scalars['String'];
    readonly opacity: Maybe<Scalars['Int']>;
  };

  type ExperienceYaml = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly companyName: Maybe<Scalars['String']>;
    readonly title: Maybe<Scalars['String']>;
    readonly location: Maybe<Scalars['String']>;
    readonly type: Maybe<Scalars['String']>;
    readonly content: Maybe<ExperienceYamlContent>;
  };

  type ExperienceYamlConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<ExperienceYamlEdge>;
    readonly nodes: ReadonlyArray<ExperienceYaml>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<ExperienceYamlGroupConnection>;
  };

  type ExperienceYamlConnection_distinctArgs = {
    field: ExperienceYamlFieldsEnum;
  };

  type ExperienceYamlConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: ExperienceYamlFieldsEnum;
  };

  type ExperienceYamlContent = {
    readonly body: Maybe<Scalars['String']>;
  };

  type ExperienceYamlContentFilterInput = {
    readonly body: Maybe<StringQueryOperatorInput>;
  };

  type ExperienceYamlEdge = {
    readonly next: Maybe<ExperienceYaml>;
    readonly node: ExperienceYaml;
    readonly previous: Maybe<ExperienceYaml>;
  };

  enum ExperienceYamlFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    companyName = 'companyName',
    title = 'title',
    location = 'location',
    type = 'type',
    content___body = 'content.body',
  }

  type ExperienceYamlFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly companyName: Maybe<StringQueryOperatorInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly location: Maybe<StringQueryOperatorInput>;
    readonly type: Maybe<StringQueryOperatorInput>;
    readonly content: Maybe<ExperienceYamlContentFilterInput>;
  };

  type ExperienceYamlFilterListInput = {
    readonly elemMatch: Maybe<ExperienceYamlFilterInput>;
  };

  type ExperienceYamlGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<ExperienceYamlEdge>;
    readonly nodes: ReadonlyArray<ExperienceYaml>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type ExperienceYamlSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ExperienceYamlFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type File = Node & {
    readonly sourceInstanceName: Scalars['String'];
    readonly absolutePath: Scalars['String'];
    readonly relativePath: Scalars['String'];
    readonly extension: Scalars['String'];
    readonly size: Scalars['Int'];
    readonly prettySize: Scalars['String'];
    readonly modifiedTime: Scalars['Date'];
    readonly accessTime: Scalars['Date'];
    readonly changeTime: Scalars['Date'];
    readonly birthTime: Scalars['Date'];
    readonly root: Scalars['String'];
    readonly dir: Scalars['String'];
    readonly base: Scalars['String'];
    readonly ext: Scalars['String'];
    readonly name: Scalars['String'];
    readonly relativeDirectory: Scalars['String'];
    readonly dev: Scalars['Int'];
    readonly mode: Scalars['Int'];
    readonly nlink: Scalars['Int'];
    readonly uid: Scalars['Int'];
    readonly gid: Scalars['Int'];
    readonly rdev: Scalars['Int'];
    readonly ino: Scalars['Float'];
    readonly atimeMs: Scalars['Float'];
    readonly mtimeMs: Scalars['Float'];
    readonly ctimeMs: Scalars['Float'];
    readonly atime: Scalars['Date'];
    readonly mtime: Scalars['Date'];
    readonly ctime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars['Float']>;
    readonly blksize: Maybe<Scalars['Int']>;
    readonly blocks: Maybe<Scalars['Int']>;
    /** Copy file to static directory and return public url to it */
    readonly publicURL: Maybe<Scalars['String']>;
    readonly childImageSharp: Maybe<ImageSharp>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly childMdx: Maybe<Mdx>;
    readonly childrenExperienceYaml: Maybe<ReadonlyArray<Maybe<ExperienceYaml>>>;
    readonly childrenProjectsJson: Maybe<ReadonlyArray<Maybe<ProjectsJson>>>;
  };

  type File_modifiedTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_accessTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_changeTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_birthTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_atimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_mtimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type File_ctimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type FileConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<FileEdge>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<FileGroupConnection>;
  };

  type FileConnection_distinctArgs = {
    field: FileFieldsEnum;
  };

  type FileConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: FileFieldsEnum;
  };

  type FileEdge = {
    readonly next: Maybe<File>;
    readonly node: File;
    readonly previous: Maybe<File>;
  };

  enum FileFieldsEnum {
    sourceInstanceName = 'sourceInstanceName',
    absolutePath = 'absolutePath',
    relativePath = 'relativePath',
    extension = 'extension',
    size = 'size',
    prettySize = 'prettySize',
    modifiedTime = 'modifiedTime',
    accessTime = 'accessTime',
    changeTime = 'changeTime',
    birthTime = 'birthTime',
    root = 'root',
    dir = 'dir',
    base = 'base',
    ext = 'ext',
    name = 'name',
    relativeDirectory = 'relativeDirectory',
    dev = 'dev',
    mode = 'mode',
    nlink = 'nlink',
    uid = 'uid',
    gid = 'gid',
    rdev = 'rdev',
    ino = 'ino',
    atimeMs = 'atimeMs',
    mtimeMs = 'mtimeMs',
    ctimeMs = 'ctimeMs',
    atime = 'atime',
    mtime = 'mtime',
    ctime = 'ctime',
    birthtime = 'birthtime',
    birthtimeMs = 'birthtimeMs',
    blksize = 'blksize',
    blocks = 'blocks',
    publicURL = 'publicURL',
    childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
    childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
    childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
    childImageSharp___fixed___width = 'childImageSharp.fixed.width',
    childImageSharp___fixed___height = 'childImageSharp.fixed.height',
    childImageSharp___fixed___src = 'childImageSharp.fixed.src',
    childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
    childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
    childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
    childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
    childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
    childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
    childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
    childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
    childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
    childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
    childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
    childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
    childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
    childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
    childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
    childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
    childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
    childImageSharp___fluid___src = 'childImageSharp.fluid.src',
    childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
    childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
    childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
    childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
    childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
    childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
    childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
    childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
    childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
    childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
    childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
    childImageSharp___sizes___src = 'childImageSharp.sizes.src',
    childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
    childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
    childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
    childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
    childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
    childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
    childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
    childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
    childImageSharp___gatsbyImage___imageData = 'childImageSharp.gatsbyImage.imageData',
    childImageSharp___original___width = 'childImageSharp.original.width',
    childImageSharp___original___height = 'childImageSharp.original.height',
    childImageSharp___original___src = 'childImageSharp.original.src',
    childImageSharp___resize___src = 'childImageSharp.resize.src',
    childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
    childImageSharp___resize___width = 'childImageSharp.resize.width',
    childImageSharp___resize___height = 'childImageSharp.resize.height',
    childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
    childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
    childImageSharp___id = 'childImageSharp.id',
    childImageSharp___parent___id = 'childImageSharp.parent.id',
    childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
    childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
    childImageSharp___parent___children = 'childImageSharp.parent.children',
    childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
    childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
    childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
    childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
    childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
    childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
    childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
    childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
    childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
    childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
    childImageSharp___children = 'childImageSharp.children',
    childImageSharp___children___id = 'childImageSharp.children.id',
    childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
    childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
    childImageSharp___children___children = 'childImageSharp.children.children',
    childImageSharp___children___children___id = 'childImageSharp.children.children.id',
    childImageSharp___children___children___children = 'childImageSharp.children.children.children',
    childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
    childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
    childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
    childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
    childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
    childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
    childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
    childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
    childImageSharp___internal___content = 'childImageSharp.internal.content',
    childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
    childImageSharp___internal___description = 'childImageSharp.internal.description',
    childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
    childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
    childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
    childImageSharp___internal___owner = 'childImageSharp.internal.owner',
    childImageSharp___internal___type = 'childImageSharp.internal.type',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    childMdx___rawBody = 'childMdx.rawBody',
    childMdx___fileAbsolutePath = 'childMdx.fileAbsolutePath',
    childMdx___frontmatter___title = 'childMdx.frontmatter.title',
    childMdx___frontmatter___tags = 'childMdx.frontmatter.tags',
    childMdx___frontmatter___hidden = 'childMdx.frontmatter.hidden',
    childMdx___frontmatter___date = 'childMdx.frontmatter.date',
    childMdx___frontmatter___category = 'childMdx.frontmatter.category',
    childMdx___frontmatter___thumbnail___sourceInstanceName = 'childMdx.frontmatter.thumbnail.sourceInstanceName',
    childMdx___frontmatter___thumbnail___absolutePath = 'childMdx.frontmatter.thumbnail.absolutePath',
    childMdx___frontmatter___thumbnail___relativePath = 'childMdx.frontmatter.thumbnail.relativePath',
    childMdx___frontmatter___thumbnail___extension = 'childMdx.frontmatter.thumbnail.extension',
    childMdx___frontmatter___thumbnail___size = 'childMdx.frontmatter.thumbnail.size',
    childMdx___frontmatter___thumbnail___prettySize = 'childMdx.frontmatter.thumbnail.prettySize',
    childMdx___frontmatter___thumbnail___modifiedTime = 'childMdx.frontmatter.thumbnail.modifiedTime',
    childMdx___frontmatter___thumbnail___accessTime = 'childMdx.frontmatter.thumbnail.accessTime',
    childMdx___frontmatter___thumbnail___changeTime = 'childMdx.frontmatter.thumbnail.changeTime',
    childMdx___frontmatter___thumbnail___birthTime = 'childMdx.frontmatter.thumbnail.birthTime',
    childMdx___frontmatter___thumbnail___root = 'childMdx.frontmatter.thumbnail.root',
    childMdx___frontmatter___thumbnail___dir = 'childMdx.frontmatter.thumbnail.dir',
    childMdx___frontmatter___thumbnail___base = 'childMdx.frontmatter.thumbnail.base',
    childMdx___frontmatter___thumbnail___ext = 'childMdx.frontmatter.thumbnail.ext',
    childMdx___frontmatter___thumbnail___name = 'childMdx.frontmatter.thumbnail.name',
    childMdx___frontmatter___thumbnail___relativeDirectory = 'childMdx.frontmatter.thumbnail.relativeDirectory',
    childMdx___frontmatter___thumbnail___dev = 'childMdx.frontmatter.thumbnail.dev',
    childMdx___frontmatter___thumbnail___mode = 'childMdx.frontmatter.thumbnail.mode',
    childMdx___frontmatter___thumbnail___nlink = 'childMdx.frontmatter.thumbnail.nlink',
    childMdx___frontmatter___thumbnail___uid = 'childMdx.frontmatter.thumbnail.uid',
    childMdx___frontmatter___thumbnail___gid = 'childMdx.frontmatter.thumbnail.gid',
    childMdx___frontmatter___thumbnail___rdev = 'childMdx.frontmatter.thumbnail.rdev',
    childMdx___frontmatter___thumbnail___ino = 'childMdx.frontmatter.thumbnail.ino',
    childMdx___frontmatter___thumbnail___atimeMs = 'childMdx.frontmatter.thumbnail.atimeMs',
    childMdx___frontmatter___thumbnail___mtimeMs = 'childMdx.frontmatter.thumbnail.mtimeMs',
    childMdx___frontmatter___thumbnail___ctimeMs = 'childMdx.frontmatter.thumbnail.ctimeMs',
    childMdx___frontmatter___thumbnail___atime = 'childMdx.frontmatter.thumbnail.atime',
    childMdx___frontmatter___thumbnail___mtime = 'childMdx.frontmatter.thumbnail.mtime',
    childMdx___frontmatter___thumbnail___ctime = 'childMdx.frontmatter.thumbnail.ctime',
    childMdx___frontmatter___thumbnail___birthtime = 'childMdx.frontmatter.thumbnail.birthtime',
    childMdx___frontmatter___thumbnail___birthtimeMs = 'childMdx.frontmatter.thumbnail.birthtimeMs',
    childMdx___frontmatter___thumbnail___blksize = 'childMdx.frontmatter.thumbnail.blksize',
    childMdx___frontmatter___thumbnail___blocks = 'childMdx.frontmatter.thumbnail.blocks',
    childMdx___frontmatter___thumbnail___publicURL = 'childMdx.frontmatter.thumbnail.publicURL',
    childMdx___frontmatter___thumbnail___id = 'childMdx.frontmatter.thumbnail.id',
    childMdx___frontmatter___thumbnail___children = 'childMdx.frontmatter.thumbnail.children',
    childMdx___frontmatter___thumbnail___childrenExperienceYaml = 'childMdx.frontmatter.thumbnail.childrenExperienceYaml',
    childMdx___frontmatter___thumbnail___childrenProjectsJson = 'childMdx.frontmatter.thumbnail.childrenProjectsJson',
    childMdx___frontmatter___type = 'childMdx.frontmatter.type',
    childMdx___slug = 'childMdx.slug',
    childMdx___body = 'childMdx.body',
    childMdx___excerpt = 'childMdx.excerpt',
    childMdx___headings = 'childMdx.headings',
    childMdx___headings___value = 'childMdx.headings.value',
    childMdx___headings___depth = 'childMdx.headings.depth',
    childMdx___html = 'childMdx.html',
    childMdx___mdxAST = 'childMdx.mdxAST',
    childMdx___tableOfContents = 'childMdx.tableOfContents',
    childMdx___timeToRead = 'childMdx.timeToRead',
    childMdx___wordCount___paragraphs = 'childMdx.wordCount.paragraphs',
    childMdx___wordCount___sentences = 'childMdx.wordCount.sentences',
    childMdx___wordCount___words = 'childMdx.wordCount.words',
    childMdx___fields___readingTime___text = 'childMdx.fields.readingTime.text',
    childMdx___fields___readingTime___minutes = 'childMdx.fields.readingTime.minutes',
    childMdx___fields___readingTime___time = 'childMdx.fields.readingTime.time',
    childMdx___fields___readingTime___words = 'childMdx.fields.readingTime.words',
    childMdx___fields___slug = 'childMdx.fields.slug',
    childMdx___fields___blogPath = 'childMdx.fields.blogPath',
    childMdx___id = 'childMdx.id',
    childMdx___parent___id = 'childMdx.parent.id',
    childMdx___parent___parent___id = 'childMdx.parent.parent.id',
    childMdx___parent___parent___children = 'childMdx.parent.parent.children',
    childMdx___parent___children = 'childMdx.parent.children',
    childMdx___parent___children___id = 'childMdx.parent.children.id',
    childMdx___parent___children___children = 'childMdx.parent.children.children',
    childMdx___parent___internal___content = 'childMdx.parent.internal.content',
    childMdx___parent___internal___contentDigest = 'childMdx.parent.internal.contentDigest',
    childMdx___parent___internal___description = 'childMdx.parent.internal.description',
    childMdx___parent___internal___fieldOwners = 'childMdx.parent.internal.fieldOwners',
    childMdx___parent___internal___ignoreType = 'childMdx.parent.internal.ignoreType',
    childMdx___parent___internal___mediaType = 'childMdx.parent.internal.mediaType',
    childMdx___parent___internal___owner = 'childMdx.parent.internal.owner',
    childMdx___parent___internal___type = 'childMdx.parent.internal.type',
    childMdx___children = 'childMdx.children',
    childMdx___children___id = 'childMdx.children.id',
    childMdx___children___parent___id = 'childMdx.children.parent.id',
    childMdx___children___parent___children = 'childMdx.children.parent.children',
    childMdx___children___children = 'childMdx.children.children',
    childMdx___children___children___id = 'childMdx.children.children.id',
    childMdx___children___children___children = 'childMdx.children.children.children',
    childMdx___children___internal___content = 'childMdx.children.internal.content',
    childMdx___children___internal___contentDigest = 'childMdx.children.internal.contentDigest',
    childMdx___children___internal___description = 'childMdx.children.internal.description',
    childMdx___children___internal___fieldOwners = 'childMdx.children.internal.fieldOwners',
    childMdx___children___internal___ignoreType = 'childMdx.children.internal.ignoreType',
    childMdx___children___internal___mediaType = 'childMdx.children.internal.mediaType',
    childMdx___children___internal___owner = 'childMdx.children.internal.owner',
    childMdx___children___internal___type = 'childMdx.children.internal.type',
    childMdx___internal___content = 'childMdx.internal.content',
    childMdx___internal___contentDigest = 'childMdx.internal.contentDigest',
    childMdx___internal___description = 'childMdx.internal.description',
    childMdx___internal___fieldOwners = 'childMdx.internal.fieldOwners',
    childMdx___internal___ignoreType = 'childMdx.internal.ignoreType',
    childMdx___internal___mediaType = 'childMdx.internal.mediaType',
    childMdx___internal___owner = 'childMdx.internal.owner',
    childMdx___internal___type = 'childMdx.internal.type',
    childrenExperienceYaml = 'childrenExperienceYaml',
    childrenExperienceYaml___id = 'childrenExperienceYaml.id',
    childrenExperienceYaml___parent___id = 'childrenExperienceYaml.parent.id',
    childrenExperienceYaml___parent___parent___id = 'childrenExperienceYaml.parent.parent.id',
    childrenExperienceYaml___parent___parent___children = 'childrenExperienceYaml.parent.parent.children',
    childrenExperienceYaml___parent___children = 'childrenExperienceYaml.parent.children',
    childrenExperienceYaml___parent___children___id = 'childrenExperienceYaml.parent.children.id',
    childrenExperienceYaml___parent___children___children = 'childrenExperienceYaml.parent.children.children',
    childrenExperienceYaml___parent___internal___content = 'childrenExperienceYaml.parent.internal.content',
    childrenExperienceYaml___parent___internal___contentDigest = 'childrenExperienceYaml.parent.internal.contentDigest',
    childrenExperienceYaml___parent___internal___description = 'childrenExperienceYaml.parent.internal.description',
    childrenExperienceYaml___parent___internal___fieldOwners = 'childrenExperienceYaml.parent.internal.fieldOwners',
    childrenExperienceYaml___parent___internal___ignoreType = 'childrenExperienceYaml.parent.internal.ignoreType',
    childrenExperienceYaml___parent___internal___mediaType = 'childrenExperienceYaml.parent.internal.mediaType',
    childrenExperienceYaml___parent___internal___owner = 'childrenExperienceYaml.parent.internal.owner',
    childrenExperienceYaml___parent___internal___type = 'childrenExperienceYaml.parent.internal.type',
    childrenExperienceYaml___children = 'childrenExperienceYaml.children',
    childrenExperienceYaml___children___id = 'childrenExperienceYaml.children.id',
    childrenExperienceYaml___children___parent___id = 'childrenExperienceYaml.children.parent.id',
    childrenExperienceYaml___children___parent___children = 'childrenExperienceYaml.children.parent.children',
    childrenExperienceYaml___children___children = 'childrenExperienceYaml.children.children',
    childrenExperienceYaml___children___children___id = 'childrenExperienceYaml.children.children.id',
    childrenExperienceYaml___children___children___children = 'childrenExperienceYaml.children.children.children',
    childrenExperienceYaml___children___internal___content = 'childrenExperienceYaml.children.internal.content',
    childrenExperienceYaml___children___internal___contentDigest = 'childrenExperienceYaml.children.internal.contentDigest',
    childrenExperienceYaml___children___internal___description = 'childrenExperienceYaml.children.internal.description',
    childrenExperienceYaml___children___internal___fieldOwners = 'childrenExperienceYaml.children.internal.fieldOwners',
    childrenExperienceYaml___children___internal___ignoreType = 'childrenExperienceYaml.children.internal.ignoreType',
    childrenExperienceYaml___children___internal___mediaType = 'childrenExperienceYaml.children.internal.mediaType',
    childrenExperienceYaml___children___internal___owner = 'childrenExperienceYaml.children.internal.owner',
    childrenExperienceYaml___children___internal___type = 'childrenExperienceYaml.children.internal.type',
    childrenExperienceYaml___internal___content = 'childrenExperienceYaml.internal.content',
    childrenExperienceYaml___internal___contentDigest = 'childrenExperienceYaml.internal.contentDigest',
    childrenExperienceYaml___internal___description = 'childrenExperienceYaml.internal.description',
    childrenExperienceYaml___internal___fieldOwners = 'childrenExperienceYaml.internal.fieldOwners',
    childrenExperienceYaml___internal___ignoreType = 'childrenExperienceYaml.internal.ignoreType',
    childrenExperienceYaml___internal___mediaType = 'childrenExperienceYaml.internal.mediaType',
    childrenExperienceYaml___internal___owner = 'childrenExperienceYaml.internal.owner',
    childrenExperienceYaml___internal___type = 'childrenExperienceYaml.internal.type',
    childrenExperienceYaml___companyName = 'childrenExperienceYaml.companyName',
    childrenExperienceYaml___title = 'childrenExperienceYaml.title',
    childrenExperienceYaml___location = 'childrenExperienceYaml.location',
    childrenExperienceYaml___type = 'childrenExperienceYaml.type',
    childrenExperienceYaml___content___body = 'childrenExperienceYaml.content.body',
    childrenProjectsJson = 'childrenProjectsJson',
    childrenProjectsJson___id = 'childrenProjectsJson.id',
    childrenProjectsJson___parent___id = 'childrenProjectsJson.parent.id',
    childrenProjectsJson___parent___parent___id = 'childrenProjectsJson.parent.parent.id',
    childrenProjectsJson___parent___parent___children = 'childrenProjectsJson.parent.parent.children',
    childrenProjectsJson___parent___children = 'childrenProjectsJson.parent.children',
    childrenProjectsJson___parent___children___id = 'childrenProjectsJson.parent.children.id',
    childrenProjectsJson___parent___children___children = 'childrenProjectsJson.parent.children.children',
    childrenProjectsJson___parent___internal___content = 'childrenProjectsJson.parent.internal.content',
    childrenProjectsJson___parent___internal___contentDigest = 'childrenProjectsJson.parent.internal.contentDigest',
    childrenProjectsJson___parent___internal___description = 'childrenProjectsJson.parent.internal.description',
    childrenProjectsJson___parent___internal___fieldOwners = 'childrenProjectsJson.parent.internal.fieldOwners',
    childrenProjectsJson___parent___internal___ignoreType = 'childrenProjectsJson.parent.internal.ignoreType',
    childrenProjectsJson___parent___internal___mediaType = 'childrenProjectsJson.parent.internal.mediaType',
    childrenProjectsJson___parent___internal___owner = 'childrenProjectsJson.parent.internal.owner',
    childrenProjectsJson___parent___internal___type = 'childrenProjectsJson.parent.internal.type',
    childrenProjectsJson___children = 'childrenProjectsJson.children',
    childrenProjectsJson___children___id = 'childrenProjectsJson.children.id',
    childrenProjectsJson___children___parent___id = 'childrenProjectsJson.children.parent.id',
    childrenProjectsJson___children___parent___children = 'childrenProjectsJson.children.parent.children',
    childrenProjectsJson___children___children = 'childrenProjectsJson.children.children',
    childrenProjectsJson___children___children___id = 'childrenProjectsJson.children.children.id',
    childrenProjectsJson___children___children___children = 'childrenProjectsJson.children.children.children',
    childrenProjectsJson___children___internal___content = 'childrenProjectsJson.children.internal.content',
    childrenProjectsJson___children___internal___contentDigest = 'childrenProjectsJson.children.internal.contentDigest',
    childrenProjectsJson___children___internal___description = 'childrenProjectsJson.children.internal.description',
    childrenProjectsJson___children___internal___fieldOwners = 'childrenProjectsJson.children.internal.fieldOwners',
    childrenProjectsJson___children___internal___ignoreType = 'childrenProjectsJson.children.internal.ignoreType',
    childrenProjectsJson___children___internal___mediaType = 'childrenProjectsJson.children.internal.mediaType',
    childrenProjectsJson___children___internal___owner = 'childrenProjectsJson.children.internal.owner',
    childrenProjectsJson___children___internal___type = 'childrenProjectsJson.children.internal.type',
    childrenProjectsJson___internal___content = 'childrenProjectsJson.internal.content',
    childrenProjectsJson___internal___contentDigest = 'childrenProjectsJson.internal.contentDigest',
    childrenProjectsJson___internal___description = 'childrenProjectsJson.internal.description',
    childrenProjectsJson___internal___fieldOwners = 'childrenProjectsJson.internal.fieldOwners',
    childrenProjectsJson___internal___ignoreType = 'childrenProjectsJson.internal.ignoreType',
    childrenProjectsJson___internal___mediaType = 'childrenProjectsJson.internal.mediaType',
    childrenProjectsJson___internal___owner = 'childrenProjectsJson.internal.owner',
    childrenProjectsJson___internal___type = 'childrenProjectsJson.internal.type',
    childrenProjectsJson___title = 'childrenProjectsJson.title',
    childrenProjectsJson___dates = 'childrenProjectsJson.dates',
    childrenProjectsJson___description = 'childrenProjectsJson.description',
    childrenProjectsJson___image___sourceInstanceName = 'childrenProjectsJson.image.sourceInstanceName',
    childrenProjectsJson___image___absolutePath = 'childrenProjectsJson.image.absolutePath',
    childrenProjectsJson___image___relativePath = 'childrenProjectsJson.image.relativePath',
    childrenProjectsJson___image___extension = 'childrenProjectsJson.image.extension',
    childrenProjectsJson___image___size = 'childrenProjectsJson.image.size',
    childrenProjectsJson___image___prettySize = 'childrenProjectsJson.image.prettySize',
    childrenProjectsJson___image___modifiedTime = 'childrenProjectsJson.image.modifiedTime',
    childrenProjectsJson___image___accessTime = 'childrenProjectsJson.image.accessTime',
    childrenProjectsJson___image___changeTime = 'childrenProjectsJson.image.changeTime',
    childrenProjectsJson___image___birthTime = 'childrenProjectsJson.image.birthTime',
    childrenProjectsJson___image___root = 'childrenProjectsJson.image.root',
    childrenProjectsJson___image___dir = 'childrenProjectsJson.image.dir',
    childrenProjectsJson___image___base = 'childrenProjectsJson.image.base',
    childrenProjectsJson___image___ext = 'childrenProjectsJson.image.ext',
    childrenProjectsJson___image___name = 'childrenProjectsJson.image.name',
    childrenProjectsJson___image___relativeDirectory = 'childrenProjectsJson.image.relativeDirectory',
    childrenProjectsJson___image___dev = 'childrenProjectsJson.image.dev',
    childrenProjectsJson___image___mode = 'childrenProjectsJson.image.mode',
    childrenProjectsJson___image___nlink = 'childrenProjectsJson.image.nlink',
    childrenProjectsJson___image___uid = 'childrenProjectsJson.image.uid',
    childrenProjectsJson___image___gid = 'childrenProjectsJson.image.gid',
    childrenProjectsJson___image___rdev = 'childrenProjectsJson.image.rdev',
    childrenProjectsJson___image___ino = 'childrenProjectsJson.image.ino',
    childrenProjectsJson___image___atimeMs = 'childrenProjectsJson.image.atimeMs',
    childrenProjectsJson___image___mtimeMs = 'childrenProjectsJson.image.mtimeMs',
    childrenProjectsJson___image___ctimeMs = 'childrenProjectsJson.image.ctimeMs',
    childrenProjectsJson___image___atime = 'childrenProjectsJson.image.atime',
    childrenProjectsJson___image___mtime = 'childrenProjectsJson.image.mtime',
    childrenProjectsJson___image___ctime = 'childrenProjectsJson.image.ctime',
    childrenProjectsJson___image___birthtime = 'childrenProjectsJson.image.birthtime',
    childrenProjectsJson___image___birthtimeMs = 'childrenProjectsJson.image.birthtimeMs',
    childrenProjectsJson___image___blksize = 'childrenProjectsJson.image.blksize',
    childrenProjectsJson___image___blocks = 'childrenProjectsJson.image.blocks',
    childrenProjectsJson___image___publicURL = 'childrenProjectsJson.image.publicURL',
    childrenProjectsJson___image___childImageSharp___id = 'childrenProjectsJson.image.childImageSharp.id',
    childrenProjectsJson___image___childImageSharp___children = 'childrenProjectsJson.image.childImageSharp.children',
    childrenProjectsJson___image___id = 'childrenProjectsJson.image.id',
    childrenProjectsJson___image___parent___id = 'childrenProjectsJson.image.parent.id',
    childrenProjectsJson___image___parent___children = 'childrenProjectsJson.image.parent.children',
    childrenProjectsJson___image___children = 'childrenProjectsJson.image.children',
    childrenProjectsJson___image___children___id = 'childrenProjectsJson.image.children.id',
    childrenProjectsJson___image___children___children = 'childrenProjectsJson.image.children.children',
    childrenProjectsJson___image___internal___content = 'childrenProjectsJson.image.internal.content',
    childrenProjectsJson___image___internal___contentDigest = 'childrenProjectsJson.image.internal.contentDigest',
    childrenProjectsJson___image___internal___description = 'childrenProjectsJson.image.internal.description',
    childrenProjectsJson___image___internal___fieldOwners = 'childrenProjectsJson.image.internal.fieldOwners',
    childrenProjectsJson___image___internal___ignoreType = 'childrenProjectsJson.image.internal.ignoreType',
    childrenProjectsJson___image___internal___mediaType = 'childrenProjectsJson.image.internal.mediaType',
    childrenProjectsJson___image___internal___owner = 'childrenProjectsJson.image.internal.owner',
    childrenProjectsJson___image___internal___type = 'childrenProjectsJson.image.internal.type',
    childrenProjectsJson___image___childMdx___rawBody = 'childrenProjectsJson.image.childMdx.rawBody',
    childrenProjectsJson___image___childMdx___fileAbsolutePath = 'childrenProjectsJson.image.childMdx.fileAbsolutePath',
    childrenProjectsJson___image___childMdx___slug = 'childrenProjectsJson.image.childMdx.slug',
    childrenProjectsJson___image___childMdx___body = 'childrenProjectsJson.image.childMdx.body',
    childrenProjectsJson___image___childMdx___excerpt = 'childrenProjectsJson.image.childMdx.excerpt',
    childrenProjectsJson___image___childMdx___headings = 'childrenProjectsJson.image.childMdx.headings',
    childrenProjectsJson___image___childMdx___html = 'childrenProjectsJson.image.childMdx.html',
    childrenProjectsJson___image___childMdx___mdxAST = 'childrenProjectsJson.image.childMdx.mdxAST',
    childrenProjectsJson___image___childMdx___tableOfContents = 'childrenProjectsJson.image.childMdx.tableOfContents',
    childrenProjectsJson___image___childMdx___timeToRead = 'childrenProjectsJson.image.childMdx.timeToRead',
    childrenProjectsJson___image___childMdx___id = 'childrenProjectsJson.image.childMdx.id',
    childrenProjectsJson___image___childMdx___children = 'childrenProjectsJson.image.childMdx.children',
    childrenProjectsJson___image___childrenExperienceYaml = 'childrenProjectsJson.image.childrenExperienceYaml',
    childrenProjectsJson___image___childrenExperienceYaml___id = 'childrenProjectsJson.image.childrenExperienceYaml.id',
    childrenProjectsJson___image___childrenExperienceYaml___children = 'childrenProjectsJson.image.childrenExperienceYaml.children',
    childrenProjectsJson___image___childrenExperienceYaml___companyName = 'childrenProjectsJson.image.childrenExperienceYaml.companyName',
    childrenProjectsJson___image___childrenExperienceYaml___title = 'childrenProjectsJson.image.childrenExperienceYaml.title',
    childrenProjectsJson___image___childrenExperienceYaml___location = 'childrenProjectsJson.image.childrenExperienceYaml.location',
    childrenProjectsJson___image___childrenExperienceYaml___type = 'childrenProjectsJson.image.childrenExperienceYaml.type',
    childrenProjectsJson___image___childrenProjectsJson = 'childrenProjectsJson.image.childrenProjectsJson',
    childrenProjectsJson___image___childrenProjectsJson___id = 'childrenProjectsJson.image.childrenProjectsJson.id',
    childrenProjectsJson___image___childrenProjectsJson___children = 'childrenProjectsJson.image.childrenProjectsJson.children',
    childrenProjectsJson___image___childrenProjectsJson___title = 'childrenProjectsJson.image.childrenProjectsJson.title',
    childrenProjectsJson___image___childrenProjectsJson___dates = 'childrenProjectsJson.image.childrenProjectsJson.dates',
    childrenProjectsJson___image___childrenProjectsJson___description = 'childrenProjectsJson.image.childrenProjectsJson.description',
    childrenProjectsJson___image___childrenProjectsJson___github = 'childrenProjectsJson.image.childrenProjectsJson.github',
    childrenProjectsJson___github = 'childrenProjectsJson.github',
  }

  type FileFilterInput = {
    readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
    readonly absolutePath: Maybe<StringQueryOperatorInput>;
    readonly relativePath: Maybe<StringQueryOperatorInput>;
    readonly extension: Maybe<StringQueryOperatorInput>;
    readonly size: Maybe<IntQueryOperatorInput>;
    readonly prettySize: Maybe<StringQueryOperatorInput>;
    readonly modifiedTime: Maybe<DateQueryOperatorInput>;
    readonly accessTime: Maybe<DateQueryOperatorInput>;
    readonly changeTime: Maybe<DateQueryOperatorInput>;
    readonly birthTime: Maybe<DateQueryOperatorInput>;
    readonly root: Maybe<StringQueryOperatorInput>;
    readonly dir: Maybe<StringQueryOperatorInput>;
    readonly base: Maybe<StringQueryOperatorInput>;
    readonly ext: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
    readonly dev: Maybe<IntQueryOperatorInput>;
    readonly mode: Maybe<IntQueryOperatorInput>;
    readonly nlink: Maybe<IntQueryOperatorInput>;
    readonly uid: Maybe<IntQueryOperatorInput>;
    readonly gid: Maybe<IntQueryOperatorInput>;
    readonly rdev: Maybe<IntQueryOperatorInput>;
    readonly ino: Maybe<FloatQueryOperatorInput>;
    readonly atimeMs: Maybe<FloatQueryOperatorInput>;
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
    readonly atime: Maybe<DateQueryOperatorInput>;
    readonly mtime: Maybe<DateQueryOperatorInput>;
    readonly ctime: Maybe<DateQueryOperatorInput>;
    readonly birthtime: Maybe<DateQueryOperatorInput>;
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly blksize: Maybe<IntQueryOperatorInput>;
    readonly blocks: Maybe<IntQueryOperatorInput>;
    readonly publicURL: Maybe<StringQueryOperatorInput>;
    readonly childImageSharp: Maybe<ImageSharpFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly childMdx: Maybe<MdxFilterInput>;
    readonly childrenExperienceYaml: Maybe<ExperienceYamlFilterListInput>;
    readonly childrenProjectsJson: Maybe<ProjectsJsonFilterListInput>;
  };

  type FileGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<FileEdge>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type FileSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type FloatQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Float']>;
    readonly ne: Maybe<Scalars['Float']>;
    readonly gt: Maybe<Scalars['Float']>;
    readonly gte: Maybe<Scalars['Float']>;
    readonly lt: Maybe<Scalars['Float']>;
    readonly lte: Maybe<Scalars['Float']>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  };

  enum HeadingsMdx {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
  }

  enum ImageCropFocus {
    CENTER = 0,
    NORTH = 1,
    NORTHEAST = 5,
    EAST = 2,
    SOUTHEAST = 6,
    SOUTH = 3,
    SOUTHWEST = 7,
    WEST = 4,
    NORTHWEST = 8,
    ENTROPY = 16,
    ATTENTION = 17,
  }

  enum ImageFit {
    COVER = 'cover',
    CONTAIN = 'contain',
    FILL = 'fill',
    INSIDE = 'inside',
    OUTSIDE = 'outside',
  }

  enum ImageFormat {
    NO_CHANGE = '',
    JPG = 'jpg',
    PNG = 'png',
    WEBP = 'webp',
  }

  enum ImageLayout {
    FIXED = 'fixed',
    FLUID = 'fluid',
    CONSTRAINED = 'constrained',
  }

  enum ImagePlaceholder {
    DOMINANT_COLOR = 'dominantColor',
    TRACED_SVG = 'tracedSVG',
    BASE64 = 'base64',
    NONE = 'none',
  }

  type ImageSharp = Node & {
    readonly fixed: Maybe<ImageSharpFixed>;
    /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
    readonly resolutions: Maybe<ImageSharpResolutions>;
    readonly fluid: Maybe<ImageSharpFluid>;
    /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
    readonly sizes: Maybe<ImageSharpSizes>;
    readonly gatsbyImage: Maybe<ImageSharpGatsbyImage>;
    readonly original: Maybe<ImageSharpOriginal>;
    readonly resize: Maybe<ImageSharpResize>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type ImageSharp_fixedArgs = {
    width: Maybe<Scalars['Int']>;
    height: Maybe<Scalars['Int']>;
    base64Width: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharp_resolutionsArgs = {
    width: Maybe<Scalars['Int']>;
    height: Maybe<Scalars['Int']>;
    base64Width: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharp_fluidArgs = {
    maxWidth: Maybe<Scalars['Int']>;
    maxHeight: Maybe<Scalars['Int']>;
    base64Width: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  };

  type ImageSharp_sizesArgs = {
    maxWidth: Maybe<Scalars['Int']>;
    maxHeight: Maybe<Scalars['Int']>;
    base64Width: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone: Maybe<DuotoneGradient>;
    traceSVG: Maybe<Potrace>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  };

  type ImageSharp_gatsbyImageArgs = {
    layout?: Maybe<ImageLayout>;
    maxWidth: Maybe<Scalars['Int']>;
    maxHeight: Maybe<Scalars['Int']>;
    width: Maybe<Scalars['Int']>;
    height: Maybe<Scalars['Int']>;
    placeholder: Maybe<ImagePlaceholder>;
    tracedSVGOptions: Maybe<Potrace>;
    webP?: Maybe<Scalars['Boolean']>;
    outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
    sizes?: Maybe<Scalars['String']>;
    base64Width: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone: Maybe<DuotoneGradient>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  };

  type ImageSharp_resizeArgs = {
    width: Maybe<Scalars['Int']>;
    height: Maybe<Scalars['Int']>;
    quality: Maybe<Scalars['Int']>;
    jpegQuality: Maybe<Scalars['Int']>;
    pngQuality: Maybe<Scalars['Int']>;
    webpQuality: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionLevel?: Maybe<Scalars['Int']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone: Maybe<DuotoneGradient>;
    base64?: Maybe<Scalars['Boolean']>;
    traceSVG: Maybe<Potrace>;
    toFormat?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharpConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<ImageSharpEdge>;
    readonly nodes: ReadonlyArray<ImageSharp>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  };

  type ImageSharpConnection_distinctArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpEdge = {
    readonly next: Maybe<ImageSharp>;
    readonly node: ImageSharp;
    readonly previous: Maybe<ImageSharp>;
  };

  enum ImageSharpFieldsEnum {
    fixed___base64 = 'fixed.base64',
    fixed___tracedSVG = 'fixed.tracedSVG',
    fixed___aspectRatio = 'fixed.aspectRatio',
    fixed___width = 'fixed.width',
    fixed___height = 'fixed.height',
    fixed___src = 'fixed.src',
    fixed___srcSet = 'fixed.srcSet',
    fixed___srcWebp = 'fixed.srcWebp',
    fixed___srcSetWebp = 'fixed.srcSetWebp',
    fixed___originalName = 'fixed.originalName',
    resolutions___base64 = 'resolutions.base64',
    resolutions___tracedSVG = 'resolutions.tracedSVG',
    resolutions___aspectRatio = 'resolutions.aspectRatio',
    resolutions___width = 'resolutions.width',
    resolutions___height = 'resolutions.height',
    resolutions___src = 'resolutions.src',
    resolutions___srcSet = 'resolutions.srcSet',
    resolutions___srcWebp = 'resolutions.srcWebp',
    resolutions___srcSetWebp = 'resolutions.srcSetWebp',
    resolutions___originalName = 'resolutions.originalName',
    fluid___base64 = 'fluid.base64',
    fluid___tracedSVG = 'fluid.tracedSVG',
    fluid___aspectRatio = 'fluid.aspectRatio',
    fluid___src = 'fluid.src',
    fluid___srcSet = 'fluid.srcSet',
    fluid___srcWebp = 'fluid.srcWebp',
    fluid___srcSetWebp = 'fluid.srcSetWebp',
    fluid___sizes = 'fluid.sizes',
    fluid___originalImg = 'fluid.originalImg',
    fluid___originalName = 'fluid.originalName',
    fluid___presentationWidth = 'fluid.presentationWidth',
    fluid___presentationHeight = 'fluid.presentationHeight',
    sizes___base64 = 'sizes.base64',
    sizes___tracedSVG = 'sizes.tracedSVG',
    sizes___aspectRatio = 'sizes.aspectRatio',
    sizes___src = 'sizes.src',
    sizes___srcSet = 'sizes.srcSet',
    sizes___srcWebp = 'sizes.srcWebp',
    sizes___srcSetWebp = 'sizes.srcSetWebp',
    sizes___sizes = 'sizes.sizes',
    sizes___originalImg = 'sizes.originalImg',
    sizes___originalName = 'sizes.originalName',
    sizes___presentationWidth = 'sizes.presentationWidth',
    sizes___presentationHeight = 'sizes.presentationHeight',
    gatsbyImage___imageData = 'gatsbyImage.imageData',
    original___width = 'original.width',
    original___height = 'original.height',
    original___src = 'original.src',
    resize___src = 'resize.src',
    resize___tracedSVG = 'resize.tracedSVG',
    resize___width = 'resize.width',
    resize___height = 'resize.height',
    resize___aspectRatio = 'resize.aspectRatio',
    resize___originalName = 'resize.originalName',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
  }

  type ImageSharpFilterInput = {
    readonly fixed: Maybe<ImageSharpFixedFilterInput>;
    readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
    readonly fluid: Maybe<ImageSharpFluidFilterInput>;
    readonly sizes: Maybe<ImageSharpSizesFilterInput>;
    readonly gatsbyImage: Maybe<ImageSharpGatsbyImageFilterInput>;
    readonly original: Maybe<ImageSharpOriginalFilterInput>;
    readonly resize: Maybe<ImageSharpResizeFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type ImageSharpFixed = {
    readonly base64: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly aspectRatio: Maybe<Scalars['Float']>;
    readonly width: Scalars['Float'];
    readonly height: Scalars['Float'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly originalName: Maybe<Scalars['String']>;
  };

  type ImageSharpFixedFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly width: Maybe<FloatQueryOperatorInput>;
    readonly height: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpFluid = {
    readonly base64: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly aspectRatio: Scalars['Float'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly sizes: Scalars['String'];
    readonly originalImg: Maybe<Scalars['String']>;
    readonly originalName: Maybe<Scalars['String']>;
    readonly presentationWidth: Scalars['Int'];
    readonly presentationHeight: Scalars['Int'];
  };

  type ImageSharpFluidFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly sizes: Maybe<StringQueryOperatorInput>;
    readonly originalImg: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
    readonly presentationWidth: Maybe<IntQueryOperatorInput>;
    readonly presentationHeight: Maybe<IntQueryOperatorInput>;
  };

  type ImageSharpGatsbyImage = {
    readonly imageData: Scalars['JSON'];
  };

  type ImageSharpGatsbyImageFilterInput = {
    readonly imageData: Maybe<JSONQueryOperatorInput>;
  };

  type ImageSharpGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<ImageSharpEdge>;
    readonly nodes: ReadonlyArray<ImageSharp>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type ImageSharpOriginal = {
    readonly width: Maybe<Scalars['Float']>;
    readonly height: Maybe<Scalars['Float']>;
    readonly src: Maybe<Scalars['String']>;
  };

  type ImageSharpOriginalFilterInput = {
    readonly width: Maybe<FloatQueryOperatorInput>;
    readonly height: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpResize = {
    readonly src: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly width: Maybe<Scalars['Int']>;
    readonly height: Maybe<Scalars['Int']>;
    readonly aspectRatio: Maybe<Scalars['Float']>;
    readonly originalName: Maybe<Scalars['String']>;
  };

  type ImageSharpResizeFilterInput = {
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly width: Maybe<IntQueryOperatorInput>;
    readonly height: Maybe<IntQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpResolutions = {
    readonly base64: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly aspectRatio: Maybe<Scalars['Float']>;
    readonly width: Scalars['Float'];
    readonly height: Scalars['Float'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly originalName: Maybe<Scalars['String']>;
  };

  type ImageSharpResolutionsFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly width: Maybe<FloatQueryOperatorInput>;
    readonly height: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpSizes = {
    readonly base64: Maybe<Scalars['String']>;
    readonly tracedSVG: Maybe<Scalars['String']>;
    readonly aspectRatio: Scalars['Float'];
    readonly src: Scalars['String'];
    readonly srcSet: Scalars['String'];
    readonly srcWebp: Maybe<Scalars['String']>;
    readonly srcSetWebp: Maybe<Scalars['String']>;
    readonly sizes: Scalars['String'];
    readonly originalImg: Maybe<Scalars['String']>;
    readonly originalName: Maybe<Scalars['String']>;
    readonly presentationWidth: Scalars['Int'];
    readonly presentationHeight: Scalars['Int'];
  };

  type ImageSharpSizesFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>;
    readonly tracedSVG: Maybe<StringQueryOperatorInput>;
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
    readonly src: Maybe<StringQueryOperatorInput>;
    readonly srcSet: Maybe<StringQueryOperatorInput>;
    readonly srcWebp: Maybe<StringQueryOperatorInput>;
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
    readonly sizes: Maybe<StringQueryOperatorInput>;
    readonly originalImg: Maybe<StringQueryOperatorInput>;
    readonly originalName: Maybe<StringQueryOperatorInput>;
    readonly presentationWidth: Maybe<IntQueryOperatorInput>;
    readonly presentationHeight: Maybe<IntQueryOperatorInput>;
  };

  type ImageSharpSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type Internal = {
    readonly content: Maybe<Scalars['String']>;
    readonly contentDigest: Scalars['String'];
    readonly description: Maybe<Scalars['String']>;
    readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly ignoreType: Maybe<Scalars['Boolean']>;
    readonly mediaType: Maybe<Scalars['String']>;
    readonly owner: Scalars['String'];
    readonly type: Scalars['String'];
  };

  type InternalFilterInput = {
    readonly content: Maybe<StringQueryOperatorInput>;
    readonly contentDigest: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly fieldOwners: Maybe<StringQueryOperatorInput>;
    readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
    readonly mediaType: Maybe<StringQueryOperatorInput>;
    readonly owner: Maybe<StringQueryOperatorInput>;
    readonly type: Maybe<StringQueryOperatorInput>;
  };

  type IntQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Int']>;
    readonly ne: Maybe<Scalars['Int']>;
    readonly gt: Maybe<Scalars['Int']>;
    readonly gte: Maybe<Scalars['Int']>;
    readonly lt: Maybe<Scalars['Int']>;
    readonly lte: Maybe<Scalars['Int']>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  };

  type JSONQueryOperatorInput = {
    readonly eq: Maybe<Scalars['JSON']>;
    readonly ne: Maybe<Scalars['JSON']>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
    readonly regex: Maybe<Scalars['JSON']>;
    readonly glob: Maybe<Scalars['JSON']>;
  };

  type Mdx = Node & {
    readonly rawBody: Scalars['String'];
    readonly fileAbsolutePath: Scalars['String'];
    readonly frontmatter: Maybe<MdxFrontmatter>;
    readonly slug: Maybe<Scalars['String']>;
    readonly body: Scalars['String'];
    readonly excerpt: Scalars['String'];
    readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
    readonly html: Maybe<Scalars['String']>;
    readonly mdxAST: Maybe<Scalars['JSON']>;
    readonly tableOfContents: Maybe<Scalars['JSON']>;
    readonly timeToRead: Maybe<Scalars['Int']>;
    readonly wordCount: Maybe<MdxWordCount>;
    readonly fields: Maybe<MdxFields>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type Mdx_excerptArgs = {
    pruneLength?: Maybe<Scalars['Int']>;
    truncate?: Maybe<Scalars['Boolean']>;
  };

  type Mdx_headingsArgs = {
    depth: Maybe<HeadingsMdx>;
  };

  type Mdx_tableOfContentsArgs = {
    maxDepth: Maybe<Scalars['Int']>;
  };

  type MdxConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<MdxEdge>;
    readonly nodes: ReadonlyArray<Mdx>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<MdxGroupConnection>;
  };

  type MdxConnection_distinctArgs = {
    field: MdxFieldsEnum;
  };

  type MdxConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: MdxFieldsEnum;
  };

  type MdxEdge = {
    readonly next: Maybe<Mdx>;
    readonly node: Mdx;
    readonly previous: Maybe<Mdx>;
  };

  type MdxFields = {
    readonly readingTime: Maybe<MdxFieldsReadingTime>;
    readonly slug: Maybe<Scalars['String']>;
    readonly blogPath: Maybe<Scalars['String']>;
  };

  enum MdxFieldsEnum {
    rawBody = 'rawBody',
    fileAbsolutePath = 'fileAbsolutePath',
    frontmatter___title = 'frontmatter.title',
    frontmatter___tags = 'frontmatter.tags',
    frontmatter___hidden = 'frontmatter.hidden',
    frontmatter___date = 'frontmatter.date',
    frontmatter___category = 'frontmatter.category',
    frontmatter___thumbnail___sourceInstanceName = 'frontmatter.thumbnail.sourceInstanceName',
    frontmatter___thumbnail___absolutePath = 'frontmatter.thumbnail.absolutePath',
    frontmatter___thumbnail___relativePath = 'frontmatter.thumbnail.relativePath',
    frontmatter___thumbnail___extension = 'frontmatter.thumbnail.extension',
    frontmatter___thumbnail___size = 'frontmatter.thumbnail.size',
    frontmatter___thumbnail___prettySize = 'frontmatter.thumbnail.prettySize',
    frontmatter___thumbnail___modifiedTime = 'frontmatter.thumbnail.modifiedTime',
    frontmatter___thumbnail___accessTime = 'frontmatter.thumbnail.accessTime',
    frontmatter___thumbnail___changeTime = 'frontmatter.thumbnail.changeTime',
    frontmatter___thumbnail___birthTime = 'frontmatter.thumbnail.birthTime',
    frontmatter___thumbnail___root = 'frontmatter.thumbnail.root',
    frontmatter___thumbnail___dir = 'frontmatter.thumbnail.dir',
    frontmatter___thumbnail___base = 'frontmatter.thumbnail.base',
    frontmatter___thumbnail___ext = 'frontmatter.thumbnail.ext',
    frontmatter___thumbnail___name = 'frontmatter.thumbnail.name',
    frontmatter___thumbnail___relativeDirectory = 'frontmatter.thumbnail.relativeDirectory',
    frontmatter___thumbnail___dev = 'frontmatter.thumbnail.dev',
    frontmatter___thumbnail___mode = 'frontmatter.thumbnail.mode',
    frontmatter___thumbnail___nlink = 'frontmatter.thumbnail.nlink',
    frontmatter___thumbnail___uid = 'frontmatter.thumbnail.uid',
    frontmatter___thumbnail___gid = 'frontmatter.thumbnail.gid',
    frontmatter___thumbnail___rdev = 'frontmatter.thumbnail.rdev',
    frontmatter___thumbnail___ino = 'frontmatter.thumbnail.ino',
    frontmatter___thumbnail___atimeMs = 'frontmatter.thumbnail.atimeMs',
    frontmatter___thumbnail___mtimeMs = 'frontmatter.thumbnail.mtimeMs',
    frontmatter___thumbnail___ctimeMs = 'frontmatter.thumbnail.ctimeMs',
    frontmatter___thumbnail___atime = 'frontmatter.thumbnail.atime',
    frontmatter___thumbnail___mtime = 'frontmatter.thumbnail.mtime',
    frontmatter___thumbnail___ctime = 'frontmatter.thumbnail.ctime',
    frontmatter___thumbnail___birthtime = 'frontmatter.thumbnail.birthtime',
    frontmatter___thumbnail___birthtimeMs = 'frontmatter.thumbnail.birthtimeMs',
    frontmatter___thumbnail___blksize = 'frontmatter.thumbnail.blksize',
    frontmatter___thumbnail___blocks = 'frontmatter.thumbnail.blocks',
    frontmatter___thumbnail___publicURL = 'frontmatter.thumbnail.publicURL',
    frontmatter___thumbnail___childImageSharp___id = 'frontmatter.thumbnail.childImageSharp.id',
    frontmatter___thumbnail___childImageSharp___children = 'frontmatter.thumbnail.childImageSharp.children',
    frontmatter___thumbnail___id = 'frontmatter.thumbnail.id',
    frontmatter___thumbnail___parent___id = 'frontmatter.thumbnail.parent.id',
    frontmatter___thumbnail___parent___children = 'frontmatter.thumbnail.parent.children',
    frontmatter___thumbnail___children = 'frontmatter.thumbnail.children',
    frontmatter___thumbnail___children___id = 'frontmatter.thumbnail.children.id',
    frontmatter___thumbnail___children___children = 'frontmatter.thumbnail.children.children',
    frontmatter___thumbnail___internal___content = 'frontmatter.thumbnail.internal.content',
    frontmatter___thumbnail___internal___contentDigest = 'frontmatter.thumbnail.internal.contentDigest',
    frontmatter___thumbnail___internal___description = 'frontmatter.thumbnail.internal.description',
    frontmatter___thumbnail___internal___fieldOwners = 'frontmatter.thumbnail.internal.fieldOwners',
    frontmatter___thumbnail___internal___ignoreType = 'frontmatter.thumbnail.internal.ignoreType',
    frontmatter___thumbnail___internal___mediaType = 'frontmatter.thumbnail.internal.mediaType',
    frontmatter___thumbnail___internal___owner = 'frontmatter.thumbnail.internal.owner',
    frontmatter___thumbnail___internal___type = 'frontmatter.thumbnail.internal.type',
    frontmatter___thumbnail___childMdx___rawBody = 'frontmatter.thumbnail.childMdx.rawBody',
    frontmatter___thumbnail___childMdx___fileAbsolutePath = 'frontmatter.thumbnail.childMdx.fileAbsolutePath',
    frontmatter___thumbnail___childMdx___slug = 'frontmatter.thumbnail.childMdx.slug',
    frontmatter___thumbnail___childMdx___body = 'frontmatter.thumbnail.childMdx.body',
    frontmatter___thumbnail___childMdx___excerpt = 'frontmatter.thumbnail.childMdx.excerpt',
    frontmatter___thumbnail___childMdx___headings = 'frontmatter.thumbnail.childMdx.headings',
    frontmatter___thumbnail___childMdx___html = 'frontmatter.thumbnail.childMdx.html',
    frontmatter___thumbnail___childMdx___mdxAST = 'frontmatter.thumbnail.childMdx.mdxAST',
    frontmatter___thumbnail___childMdx___tableOfContents = 'frontmatter.thumbnail.childMdx.tableOfContents',
    frontmatter___thumbnail___childMdx___timeToRead = 'frontmatter.thumbnail.childMdx.timeToRead',
    frontmatter___thumbnail___childMdx___id = 'frontmatter.thumbnail.childMdx.id',
    frontmatter___thumbnail___childMdx___children = 'frontmatter.thumbnail.childMdx.children',
    frontmatter___thumbnail___childrenExperienceYaml = 'frontmatter.thumbnail.childrenExperienceYaml',
    frontmatter___thumbnail___childrenExperienceYaml___id = 'frontmatter.thumbnail.childrenExperienceYaml.id',
    frontmatter___thumbnail___childrenExperienceYaml___children = 'frontmatter.thumbnail.childrenExperienceYaml.children',
    frontmatter___thumbnail___childrenExperienceYaml___companyName = 'frontmatter.thumbnail.childrenExperienceYaml.companyName',
    frontmatter___thumbnail___childrenExperienceYaml___title = 'frontmatter.thumbnail.childrenExperienceYaml.title',
    frontmatter___thumbnail___childrenExperienceYaml___location = 'frontmatter.thumbnail.childrenExperienceYaml.location',
    frontmatter___thumbnail___childrenExperienceYaml___type = 'frontmatter.thumbnail.childrenExperienceYaml.type',
    frontmatter___thumbnail___childrenProjectsJson = 'frontmatter.thumbnail.childrenProjectsJson',
    frontmatter___thumbnail___childrenProjectsJson___id = 'frontmatter.thumbnail.childrenProjectsJson.id',
    frontmatter___thumbnail___childrenProjectsJson___children = 'frontmatter.thumbnail.childrenProjectsJson.children',
    frontmatter___thumbnail___childrenProjectsJson___title = 'frontmatter.thumbnail.childrenProjectsJson.title',
    frontmatter___thumbnail___childrenProjectsJson___dates = 'frontmatter.thumbnail.childrenProjectsJson.dates',
    frontmatter___thumbnail___childrenProjectsJson___description = 'frontmatter.thumbnail.childrenProjectsJson.description',
    frontmatter___thumbnail___childrenProjectsJson___github = 'frontmatter.thumbnail.childrenProjectsJson.github',
    frontmatter___type = 'frontmatter.type',
    slug = 'slug',
    body = 'body',
    excerpt = 'excerpt',
    headings = 'headings',
    headings___value = 'headings.value',
    headings___depth = 'headings.depth',
    html = 'html',
    mdxAST = 'mdxAST',
    tableOfContents = 'tableOfContents',
    timeToRead = 'timeToRead',
    wordCount___paragraphs = 'wordCount.paragraphs',
    wordCount___sentences = 'wordCount.sentences',
    wordCount___words = 'wordCount.words',
    fields___readingTime___text = 'fields.readingTime.text',
    fields___readingTime___minutes = 'fields.readingTime.minutes',
    fields___readingTime___time = 'fields.readingTime.time',
    fields___readingTime___words = 'fields.readingTime.words',
    fields___slug = 'fields.slug',
    fields___blogPath = 'fields.blogPath',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
  }

  type MdxFieldsFilterInput = {
    readonly readingTime: Maybe<MdxFieldsReadingTimeFilterInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
    readonly blogPath: Maybe<StringQueryOperatorInput>;
  };

  type MdxFieldsReadingTime = {
    readonly text: Maybe<Scalars['String']>;
    readonly minutes: Maybe<Scalars['Float']>;
    readonly time: Maybe<Scalars['Float']>;
    readonly words: Maybe<Scalars['Int']>;
  };

  type MdxFieldsReadingTimeFilterInput = {
    readonly text: Maybe<StringQueryOperatorInput>;
    readonly minutes: Maybe<FloatQueryOperatorInput>;
    readonly time: Maybe<FloatQueryOperatorInput>;
    readonly words: Maybe<IntQueryOperatorInput>;
  };

  type MdxFilterInput = {
    readonly rawBody: Maybe<StringQueryOperatorInput>;
    readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
    readonly frontmatter: Maybe<MdxFrontmatterFilterInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
    readonly body: Maybe<StringQueryOperatorInput>;
    readonly excerpt: Maybe<StringQueryOperatorInput>;
    readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
    readonly html: Maybe<StringQueryOperatorInput>;
    readonly mdxAST: Maybe<JSONQueryOperatorInput>;
    readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
    readonly timeToRead: Maybe<IntQueryOperatorInput>;
    readonly wordCount: Maybe<MdxWordCountFilterInput>;
    readonly fields: Maybe<MdxFieldsFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type MdxFrontmatter = {
    readonly title: Scalars['String'];
    readonly tags: Maybe<ReadonlyArray<Scalars['String']>>;
    readonly hidden: Scalars['Boolean'];
    readonly date: Maybe<Scalars['Date']>;
    readonly category: Maybe<Scalars['String']>;
    readonly thumbnail: Maybe<File>;
    readonly type: Maybe<Scalars['String']>;
  };

  type MdxFrontmatter_dateArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type MdxFrontmatterFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly tags: Maybe<StringQueryOperatorInput>;
    readonly hidden: Maybe<BooleanQueryOperatorInput>;
    readonly date: Maybe<DateQueryOperatorInput>;
    readonly category: Maybe<StringQueryOperatorInput>;
    readonly thumbnail: Maybe<FileFilterInput>;
    readonly type: Maybe<StringQueryOperatorInput>;
  };

  type MdxGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<MdxEdge>;
    readonly nodes: ReadonlyArray<Mdx>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type MdxHeadingMdx = {
    readonly value: Maybe<Scalars['String']>;
    readonly depth: Maybe<Scalars['Int']>;
  };

  type MdxHeadingMdxFilterInput = {
    readonly value: Maybe<StringQueryOperatorInput>;
    readonly depth: Maybe<IntQueryOperatorInput>;
  };

  type MdxHeadingMdxFilterListInput = {
    readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
  };

  type MdxSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type MdxWordCount = {
    readonly paragraphs: Maybe<Scalars['Int']>;
    readonly sentences: Maybe<Scalars['Int']>;
    readonly words: Maybe<Scalars['Int']>;
  };

  type MdxWordCountFilterInput = {
    readonly paragraphs: Maybe<IntQueryOperatorInput>;
    readonly sentences: Maybe<IntQueryOperatorInput>;
    readonly words: Maybe<IntQueryOperatorInput>;
  };

  /** Node Interface */
  type Node = {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type NodeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type NodeFilterListInput = {
    readonly elemMatch: Maybe<NodeFilterInput>;
  };

  type PageInfo = {
    readonly currentPage: Scalars['Int'];
    readonly hasPreviousPage: Scalars['Boolean'];
    readonly hasNextPage: Scalars['Boolean'];
    readonly itemCount: Scalars['Int'];
    readonly pageCount: Scalars['Int'];
    readonly perPage: Maybe<Scalars['Int']>;
    readonly totalCount: Scalars['Int'];
  };

  type Potrace = {
    readonly turnPolicy: Maybe<PotraceTurnPolicy>;
    readonly turdSize: Maybe<Scalars['Float']>;
    readonly alphaMax: Maybe<Scalars['Float']>;
    readonly optCurve: Maybe<Scalars['Boolean']>;
    readonly optTolerance: Maybe<Scalars['Float']>;
    readonly threshold: Maybe<Scalars['Int']>;
    readonly blackOnWhite: Maybe<Scalars['Boolean']>;
    readonly color: Maybe<Scalars['String']>;
    readonly background: Maybe<Scalars['String']>;
  };

  enum PotraceTurnPolicy {
    TURNPOLICY_BLACK = 'black',
    TURNPOLICY_WHITE = 'white',
    TURNPOLICY_LEFT = 'left',
    TURNPOLICY_RIGHT = 'right',
    TURNPOLICY_MINORITY = 'minority',
    TURNPOLICY_MAJORITY = 'majority',
  }

  type ProjectsJson = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly title: Maybe<Scalars['String']>;
    readonly dates: Maybe<Scalars['String']>;
    readonly description: Maybe<Scalars['String']>;
    readonly image: Maybe<File>;
    readonly github: Maybe<Scalars['String']>;
  };

  type ProjectsJsonConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<ProjectsJsonEdge>;
    readonly nodes: ReadonlyArray<ProjectsJson>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<ProjectsJsonGroupConnection>;
  };

  type ProjectsJsonConnection_distinctArgs = {
    field: ProjectsJsonFieldsEnum;
  };

  type ProjectsJsonConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: ProjectsJsonFieldsEnum;
  };

  type ProjectsJsonEdge = {
    readonly next: Maybe<ProjectsJson>;
    readonly node: ProjectsJson;
    readonly previous: Maybe<ProjectsJson>;
  };

  enum ProjectsJsonFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    title = 'title',
    dates = 'dates',
    description = 'description',
    image___sourceInstanceName = 'image.sourceInstanceName',
    image___absolutePath = 'image.absolutePath',
    image___relativePath = 'image.relativePath',
    image___extension = 'image.extension',
    image___size = 'image.size',
    image___prettySize = 'image.prettySize',
    image___modifiedTime = 'image.modifiedTime',
    image___accessTime = 'image.accessTime',
    image___changeTime = 'image.changeTime',
    image___birthTime = 'image.birthTime',
    image___root = 'image.root',
    image___dir = 'image.dir',
    image___base = 'image.base',
    image___ext = 'image.ext',
    image___name = 'image.name',
    image___relativeDirectory = 'image.relativeDirectory',
    image___dev = 'image.dev',
    image___mode = 'image.mode',
    image___nlink = 'image.nlink',
    image___uid = 'image.uid',
    image___gid = 'image.gid',
    image___rdev = 'image.rdev',
    image___ino = 'image.ino',
    image___atimeMs = 'image.atimeMs',
    image___mtimeMs = 'image.mtimeMs',
    image___ctimeMs = 'image.ctimeMs',
    image___atime = 'image.atime',
    image___mtime = 'image.mtime',
    image___ctime = 'image.ctime',
    image___birthtime = 'image.birthtime',
    image___birthtimeMs = 'image.birthtimeMs',
    image___blksize = 'image.blksize',
    image___blocks = 'image.blocks',
    image___publicURL = 'image.publicURL',
    image___childImageSharp___fixed___base64 = 'image.childImageSharp.fixed.base64',
    image___childImageSharp___fixed___tracedSVG = 'image.childImageSharp.fixed.tracedSVG',
    image___childImageSharp___fixed___aspectRatio = 'image.childImageSharp.fixed.aspectRatio',
    image___childImageSharp___fixed___width = 'image.childImageSharp.fixed.width',
    image___childImageSharp___fixed___height = 'image.childImageSharp.fixed.height',
    image___childImageSharp___fixed___src = 'image.childImageSharp.fixed.src',
    image___childImageSharp___fixed___srcSet = 'image.childImageSharp.fixed.srcSet',
    image___childImageSharp___fixed___srcWebp = 'image.childImageSharp.fixed.srcWebp',
    image___childImageSharp___fixed___srcSetWebp = 'image.childImageSharp.fixed.srcSetWebp',
    image___childImageSharp___fixed___originalName = 'image.childImageSharp.fixed.originalName',
    image___childImageSharp___resolutions___base64 = 'image.childImageSharp.resolutions.base64',
    image___childImageSharp___resolutions___tracedSVG = 'image.childImageSharp.resolutions.tracedSVG',
    image___childImageSharp___resolutions___aspectRatio = 'image.childImageSharp.resolutions.aspectRatio',
    image___childImageSharp___resolutions___width = 'image.childImageSharp.resolutions.width',
    image___childImageSharp___resolutions___height = 'image.childImageSharp.resolutions.height',
    image___childImageSharp___resolutions___src = 'image.childImageSharp.resolutions.src',
    image___childImageSharp___resolutions___srcSet = 'image.childImageSharp.resolutions.srcSet',
    image___childImageSharp___resolutions___srcWebp = 'image.childImageSharp.resolutions.srcWebp',
    image___childImageSharp___resolutions___srcSetWebp = 'image.childImageSharp.resolutions.srcSetWebp',
    image___childImageSharp___resolutions___originalName = 'image.childImageSharp.resolutions.originalName',
    image___childImageSharp___fluid___base64 = 'image.childImageSharp.fluid.base64',
    image___childImageSharp___fluid___tracedSVG = 'image.childImageSharp.fluid.tracedSVG',
    image___childImageSharp___fluid___aspectRatio = 'image.childImageSharp.fluid.aspectRatio',
    image___childImageSharp___fluid___src = 'image.childImageSharp.fluid.src',
    image___childImageSharp___fluid___srcSet = 'image.childImageSharp.fluid.srcSet',
    image___childImageSharp___fluid___srcWebp = 'image.childImageSharp.fluid.srcWebp',
    image___childImageSharp___fluid___srcSetWebp = 'image.childImageSharp.fluid.srcSetWebp',
    image___childImageSharp___fluid___sizes = 'image.childImageSharp.fluid.sizes',
    image___childImageSharp___fluid___originalImg = 'image.childImageSharp.fluid.originalImg',
    image___childImageSharp___fluid___originalName = 'image.childImageSharp.fluid.originalName',
    image___childImageSharp___fluid___presentationWidth = 'image.childImageSharp.fluid.presentationWidth',
    image___childImageSharp___fluid___presentationHeight = 'image.childImageSharp.fluid.presentationHeight',
    image___childImageSharp___sizes___base64 = 'image.childImageSharp.sizes.base64',
    image___childImageSharp___sizes___tracedSVG = 'image.childImageSharp.sizes.tracedSVG',
    image___childImageSharp___sizes___aspectRatio = 'image.childImageSharp.sizes.aspectRatio',
    image___childImageSharp___sizes___src = 'image.childImageSharp.sizes.src',
    image___childImageSharp___sizes___srcSet = 'image.childImageSharp.sizes.srcSet',
    image___childImageSharp___sizes___srcWebp = 'image.childImageSharp.sizes.srcWebp',
    image___childImageSharp___sizes___srcSetWebp = 'image.childImageSharp.sizes.srcSetWebp',
    image___childImageSharp___sizes___sizes = 'image.childImageSharp.sizes.sizes',
    image___childImageSharp___sizes___originalImg = 'image.childImageSharp.sizes.originalImg',
    image___childImageSharp___sizes___originalName = 'image.childImageSharp.sizes.originalName',
    image___childImageSharp___sizes___presentationWidth = 'image.childImageSharp.sizes.presentationWidth',
    image___childImageSharp___sizes___presentationHeight = 'image.childImageSharp.sizes.presentationHeight',
    image___childImageSharp___gatsbyImage___imageData = 'image.childImageSharp.gatsbyImage.imageData',
    image___childImageSharp___original___width = 'image.childImageSharp.original.width',
    image___childImageSharp___original___height = 'image.childImageSharp.original.height',
    image___childImageSharp___original___src = 'image.childImageSharp.original.src',
    image___childImageSharp___resize___src = 'image.childImageSharp.resize.src',
    image___childImageSharp___resize___tracedSVG = 'image.childImageSharp.resize.tracedSVG',
    image___childImageSharp___resize___width = 'image.childImageSharp.resize.width',
    image___childImageSharp___resize___height = 'image.childImageSharp.resize.height',
    image___childImageSharp___resize___aspectRatio = 'image.childImageSharp.resize.aspectRatio',
    image___childImageSharp___resize___originalName = 'image.childImageSharp.resize.originalName',
    image___childImageSharp___id = 'image.childImageSharp.id',
    image___childImageSharp___parent___id = 'image.childImageSharp.parent.id',
    image___childImageSharp___parent___children = 'image.childImageSharp.parent.children',
    image___childImageSharp___children = 'image.childImageSharp.children',
    image___childImageSharp___children___id = 'image.childImageSharp.children.id',
    image___childImageSharp___children___children = 'image.childImageSharp.children.children',
    image___childImageSharp___internal___content = 'image.childImageSharp.internal.content',
    image___childImageSharp___internal___contentDigest = 'image.childImageSharp.internal.contentDigest',
    image___childImageSharp___internal___description = 'image.childImageSharp.internal.description',
    image___childImageSharp___internal___fieldOwners = 'image.childImageSharp.internal.fieldOwners',
    image___childImageSharp___internal___ignoreType = 'image.childImageSharp.internal.ignoreType',
    image___childImageSharp___internal___mediaType = 'image.childImageSharp.internal.mediaType',
    image___childImageSharp___internal___owner = 'image.childImageSharp.internal.owner',
    image___childImageSharp___internal___type = 'image.childImageSharp.internal.type',
    image___id = 'image.id',
    image___parent___id = 'image.parent.id',
    image___parent___parent___id = 'image.parent.parent.id',
    image___parent___parent___children = 'image.parent.parent.children',
    image___parent___children = 'image.parent.children',
    image___parent___children___id = 'image.parent.children.id',
    image___parent___children___children = 'image.parent.children.children',
    image___parent___internal___content = 'image.parent.internal.content',
    image___parent___internal___contentDigest = 'image.parent.internal.contentDigest',
    image___parent___internal___description = 'image.parent.internal.description',
    image___parent___internal___fieldOwners = 'image.parent.internal.fieldOwners',
    image___parent___internal___ignoreType = 'image.parent.internal.ignoreType',
    image___parent___internal___mediaType = 'image.parent.internal.mediaType',
    image___parent___internal___owner = 'image.parent.internal.owner',
    image___parent___internal___type = 'image.parent.internal.type',
    image___children = 'image.children',
    image___children___id = 'image.children.id',
    image___children___parent___id = 'image.children.parent.id',
    image___children___parent___children = 'image.children.parent.children',
    image___children___children = 'image.children.children',
    image___children___children___id = 'image.children.children.id',
    image___children___children___children = 'image.children.children.children',
    image___children___internal___content = 'image.children.internal.content',
    image___children___internal___contentDigest = 'image.children.internal.contentDigest',
    image___children___internal___description = 'image.children.internal.description',
    image___children___internal___fieldOwners = 'image.children.internal.fieldOwners',
    image___children___internal___ignoreType = 'image.children.internal.ignoreType',
    image___children___internal___mediaType = 'image.children.internal.mediaType',
    image___children___internal___owner = 'image.children.internal.owner',
    image___children___internal___type = 'image.children.internal.type',
    image___internal___content = 'image.internal.content',
    image___internal___contentDigest = 'image.internal.contentDigest',
    image___internal___description = 'image.internal.description',
    image___internal___fieldOwners = 'image.internal.fieldOwners',
    image___internal___ignoreType = 'image.internal.ignoreType',
    image___internal___mediaType = 'image.internal.mediaType',
    image___internal___owner = 'image.internal.owner',
    image___internal___type = 'image.internal.type',
    image___childMdx___rawBody = 'image.childMdx.rawBody',
    image___childMdx___fileAbsolutePath = 'image.childMdx.fileAbsolutePath',
    image___childMdx___frontmatter___title = 'image.childMdx.frontmatter.title',
    image___childMdx___frontmatter___tags = 'image.childMdx.frontmatter.tags',
    image___childMdx___frontmatter___hidden = 'image.childMdx.frontmatter.hidden',
    image___childMdx___frontmatter___date = 'image.childMdx.frontmatter.date',
    image___childMdx___frontmatter___category = 'image.childMdx.frontmatter.category',
    image___childMdx___frontmatter___type = 'image.childMdx.frontmatter.type',
    image___childMdx___slug = 'image.childMdx.slug',
    image___childMdx___body = 'image.childMdx.body',
    image___childMdx___excerpt = 'image.childMdx.excerpt',
    image___childMdx___headings = 'image.childMdx.headings',
    image___childMdx___headings___value = 'image.childMdx.headings.value',
    image___childMdx___headings___depth = 'image.childMdx.headings.depth',
    image___childMdx___html = 'image.childMdx.html',
    image___childMdx___mdxAST = 'image.childMdx.mdxAST',
    image___childMdx___tableOfContents = 'image.childMdx.tableOfContents',
    image___childMdx___timeToRead = 'image.childMdx.timeToRead',
    image___childMdx___wordCount___paragraphs = 'image.childMdx.wordCount.paragraphs',
    image___childMdx___wordCount___sentences = 'image.childMdx.wordCount.sentences',
    image___childMdx___wordCount___words = 'image.childMdx.wordCount.words',
    image___childMdx___fields___slug = 'image.childMdx.fields.slug',
    image___childMdx___fields___blogPath = 'image.childMdx.fields.blogPath',
    image___childMdx___id = 'image.childMdx.id',
    image___childMdx___parent___id = 'image.childMdx.parent.id',
    image___childMdx___parent___children = 'image.childMdx.parent.children',
    image___childMdx___children = 'image.childMdx.children',
    image___childMdx___children___id = 'image.childMdx.children.id',
    image___childMdx___children___children = 'image.childMdx.children.children',
    image___childMdx___internal___content = 'image.childMdx.internal.content',
    image___childMdx___internal___contentDigest = 'image.childMdx.internal.contentDigest',
    image___childMdx___internal___description = 'image.childMdx.internal.description',
    image___childMdx___internal___fieldOwners = 'image.childMdx.internal.fieldOwners',
    image___childMdx___internal___ignoreType = 'image.childMdx.internal.ignoreType',
    image___childMdx___internal___mediaType = 'image.childMdx.internal.mediaType',
    image___childMdx___internal___owner = 'image.childMdx.internal.owner',
    image___childMdx___internal___type = 'image.childMdx.internal.type',
    image___childrenExperienceYaml = 'image.childrenExperienceYaml',
    image___childrenExperienceYaml___id = 'image.childrenExperienceYaml.id',
    image___childrenExperienceYaml___parent___id = 'image.childrenExperienceYaml.parent.id',
    image___childrenExperienceYaml___parent___children = 'image.childrenExperienceYaml.parent.children',
    image___childrenExperienceYaml___children = 'image.childrenExperienceYaml.children',
    image___childrenExperienceYaml___children___id = 'image.childrenExperienceYaml.children.id',
    image___childrenExperienceYaml___children___children = 'image.childrenExperienceYaml.children.children',
    image___childrenExperienceYaml___internal___content = 'image.childrenExperienceYaml.internal.content',
    image___childrenExperienceYaml___internal___contentDigest = 'image.childrenExperienceYaml.internal.contentDigest',
    image___childrenExperienceYaml___internal___description = 'image.childrenExperienceYaml.internal.description',
    image___childrenExperienceYaml___internal___fieldOwners = 'image.childrenExperienceYaml.internal.fieldOwners',
    image___childrenExperienceYaml___internal___ignoreType = 'image.childrenExperienceYaml.internal.ignoreType',
    image___childrenExperienceYaml___internal___mediaType = 'image.childrenExperienceYaml.internal.mediaType',
    image___childrenExperienceYaml___internal___owner = 'image.childrenExperienceYaml.internal.owner',
    image___childrenExperienceYaml___internal___type = 'image.childrenExperienceYaml.internal.type',
    image___childrenExperienceYaml___companyName = 'image.childrenExperienceYaml.companyName',
    image___childrenExperienceYaml___title = 'image.childrenExperienceYaml.title',
    image___childrenExperienceYaml___location = 'image.childrenExperienceYaml.location',
    image___childrenExperienceYaml___type = 'image.childrenExperienceYaml.type',
    image___childrenExperienceYaml___content___body = 'image.childrenExperienceYaml.content.body',
    image___childrenProjectsJson = 'image.childrenProjectsJson',
    image___childrenProjectsJson___id = 'image.childrenProjectsJson.id',
    image___childrenProjectsJson___parent___id = 'image.childrenProjectsJson.parent.id',
    image___childrenProjectsJson___parent___children = 'image.childrenProjectsJson.parent.children',
    image___childrenProjectsJson___children = 'image.childrenProjectsJson.children',
    image___childrenProjectsJson___children___id = 'image.childrenProjectsJson.children.id',
    image___childrenProjectsJson___children___children = 'image.childrenProjectsJson.children.children',
    image___childrenProjectsJson___internal___content = 'image.childrenProjectsJson.internal.content',
    image___childrenProjectsJson___internal___contentDigest = 'image.childrenProjectsJson.internal.contentDigest',
    image___childrenProjectsJson___internal___description = 'image.childrenProjectsJson.internal.description',
    image___childrenProjectsJson___internal___fieldOwners = 'image.childrenProjectsJson.internal.fieldOwners',
    image___childrenProjectsJson___internal___ignoreType = 'image.childrenProjectsJson.internal.ignoreType',
    image___childrenProjectsJson___internal___mediaType = 'image.childrenProjectsJson.internal.mediaType',
    image___childrenProjectsJson___internal___owner = 'image.childrenProjectsJson.internal.owner',
    image___childrenProjectsJson___internal___type = 'image.childrenProjectsJson.internal.type',
    image___childrenProjectsJson___title = 'image.childrenProjectsJson.title',
    image___childrenProjectsJson___dates = 'image.childrenProjectsJson.dates',
    image___childrenProjectsJson___description = 'image.childrenProjectsJson.description',
    image___childrenProjectsJson___image___sourceInstanceName = 'image.childrenProjectsJson.image.sourceInstanceName',
    image___childrenProjectsJson___image___absolutePath = 'image.childrenProjectsJson.image.absolutePath',
    image___childrenProjectsJson___image___relativePath = 'image.childrenProjectsJson.image.relativePath',
    image___childrenProjectsJson___image___extension = 'image.childrenProjectsJson.image.extension',
    image___childrenProjectsJson___image___size = 'image.childrenProjectsJson.image.size',
    image___childrenProjectsJson___image___prettySize = 'image.childrenProjectsJson.image.prettySize',
    image___childrenProjectsJson___image___modifiedTime = 'image.childrenProjectsJson.image.modifiedTime',
    image___childrenProjectsJson___image___accessTime = 'image.childrenProjectsJson.image.accessTime',
    image___childrenProjectsJson___image___changeTime = 'image.childrenProjectsJson.image.changeTime',
    image___childrenProjectsJson___image___birthTime = 'image.childrenProjectsJson.image.birthTime',
    image___childrenProjectsJson___image___root = 'image.childrenProjectsJson.image.root',
    image___childrenProjectsJson___image___dir = 'image.childrenProjectsJson.image.dir',
    image___childrenProjectsJson___image___base = 'image.childrenProjectsJson.image.base',
    image___childrenProjectsJson___image___ext = 'image.childrenProjectsJson.image.ext',
    image___childrenProjectsJson___image___name = 'image.childrenProjectsJson.image.name',
    image___childrenProjectsJson___image___relativeDirectory = 'image.childrenProjectsJson.image.relativeDirectory',
    image___childrenProjectsJson___image___dev = 'image.childrenProjectsJson.image.dev',
    image___childrenProjectsJson___image___mode = 'image.childrenProjectsJson.image.mode',
    image___childrenProjectsJson___image___nlink = 'image.childrenProjectsJson.image.nlink',
    image___childrenProjectsJson___image___uid = 'image.childrenProjectsJson.image.uid',
    image___childrenProjectsJson___image___gid = 'image.childrenProjectsJson.image.gid',
    image___childrenProjectsJson___image___rdev = 'image.childrenProjectsJson.image.rdev',
    image___childrenProjectsJson___image___ino = 'image.childrenProjectsJson.image.ino',
    image___childrenProjectsJson___image___atimeMs = 'image.childrenProjectsJson.image.atimeMs',
    image___childrenProjectsJson___image___mtimeMs = 'image.childrenProjectsJson.image.mtimeMs',
    image___childrenProjectsJson___image___ctimeMs = 'image.childrenProjectsJson.image.ctimeMs',
    image___childrenProjectsJson___image___atime = 'image.childrenProjectsJson.image.atime',
    image___childrenProjectsJson___image___mtime = 'image.childrenProjectsJson.image.mtime',
    image___childrenProjectsJson___image___ctime = 'image.childrenProjectsJson.image.ctime',
    image___childrenProjectsJson___image___birthtime = 'image.childrenProjectsJson.image.birthtime',
    image___childrenProjectsJson___image___birthtimeMs = 'image.childrenProjectsJson.image.birthtimeMs',
    image___childrenProjectsJson___image___blksize = 'image.childrenProjectsJson.image.blksize',
    image___childrenProjectsJson___image___blocks = 'image.childrenProjectsJson.image.blocks',
    image___childrenProjectsJson___image___publicURL = 'image.childrenProjectsJson.image.publicURL',
    image___childrenProjectsJson___image___id = 'image.childrenProjectsJson.image.id',
    image___childrenProjectsJson___image___children = 'image.childrenProjectsJson.image.children',
    image___childrenProjectsJson___image___childrenExperienceYaml = 'image.childrenProjectsJson.image.childrenExperienceYaml',
    image___childrenProjectsJson___image___childrenProjectsJson = 'image.childrenProjectsJson.image.childrenProjectsJson',
    image___childrenProjectsJson___github = 'image.childrenProjectsJson.github',
    github = 'github',
  }

  type ProjectsJsonFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly dates: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly image: Maybe<FileFilterInput>;
    readonly github: Maybe<StringQueryOperatorInput>;
  };

  type ProjectsJsonFilterListInput = {
    readonly elemMatch: Maybe<ProjectsJsonFilterInput>;
  };

  type ProjectsJsonGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<ProjectsJsonEdge>;
    readonly nodes: ReadonlyArray<ProjectsJson>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type ProjectsJsonSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ProjectsJsonFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type Query = {
    readonly file: Maybe<File>;
    readonly allFile: FileConnection;
    readonly directory: Maybe<Directory>;
    readonly allDirectory: DirectoryConnection;
    readonly site: Maybe<Site>;
    readonly allSite: SiteConnection;
    readonly sitePage: Maybe<SitePage>;
    readonly allSitePage: SitePageConnection;
    readonly imageSharp: Maybe<ImageSharp>;
    readonly allImageSharp: ImageSharpConnection;
    readonly mdx: Maybe<Mdx>;
    readonly allMdx: MdxConnection;
    readonly experienceYaml: Maybe<ExperienceYaml>;
    readonly allExperienceYaml: ExperienceYamlConnection;
    readonly projectsJson: Maybe<ProjectsJson>;
    readonly allProjectsJson: ProjectsJsonConnection;
    readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
    readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
    readonly sitePlugin: Maybe<SitePlugin>;
    readonly allSitePlugin: SitePluginConnection;
  };

  type Query_fileArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    ino: Maybe<FloatQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    birthtime: Maybe<DateQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    blksize: Maybe<IntQueryOperatorInput>;
    blocks: Maybe<IntQueryOperatorInput>;
    publicURL: Maybe<StringQueryOperatorInput>;
    childImageSharp: Maybe<ImageSharpFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    childMdx: Maybe<MdxFilterInput>;
    childrenExperienceYaml: Maybe<ExperienceYamlFilterListInput>;
    childrenProjectsJson: Maybe<ProjectsJsonFilterListInput>;
  };

  type Query_allFileArgs = {
    filter: Maybe<FileFilterInput>;
    sort: Maybe<FileSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_directoryArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    ino: Maybe<FloatQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    birthtime: Maybe<DateQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    blksize: Maybe<IntQueryOperatorInput>;
    blocks: Maybe<IntQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allDirectoryArgs = {
    filter: Maybe<DirectoryFilterInput>;
    sort: Maybe<DirectorySortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_siteArgs = {
    buildTime: Maybe<DateQueryOperatorInput>;
    siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
    port: Maybe<IntQueryOperatorInput>;
    host: Maybe<StringQueryOperatorInput>;
    polyfill: Maybe<BooleanQueryOperatorInput>;
    pathPrefix: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allSiteArgs = {
    filter: Maybe<SiteFilterInput>;
    sort: Maybe<SiteSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_sitePageArgs = {
    path: Maybe<StringQueryOperatorInput>;
    component: Maybe<StringQueryOperatorInput>;
    internalComponentName: Maybe<StringQueryOperatorInput>;
    componentChunkName: Maybe<StringQueryOperatorInput>;
    matchPath: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
    context: Maybe<SitePageContextFilterInput>;
    pluginCreator: Maybe<SitePluginFilterInput>;
    pluginCreatorId: Maybe<StringQueryOperatorInput>;
    componentPath: Maybe<StringQueryOperatorInput>;
  };

  type Query_allSitePageArgs = {
    filter: Maybe<SitePageFilterInput>;
    sort: Maybe<SitePageSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_imageSharpArgs = {
    fixed: Maybe<ImageSharpFixedFilterInput>;
    resolutions: Maybe<ImageSharpResolutionsFilterInput>;
    fluid: Maybe<ImageSharpFluidFilterInput>;
    sizes: Maybe<ImageSharpSizesFilterInput>;
    gatsbyImage: Maybe<ImageSharpGatsbyImageFilterInput>;
    original: Maybe<ImageSharpOriginalFilterInput>;
    resize: Maybe<ImageSharpResizeFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allImageSharpArgs = {
    filter: Maybe<ImageSharpFilterInput>;
    sort: Maybe<ImageSharpSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_mdxArgs = {
    rawBody: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath: Maybe<StringQueryOperatorInput>;
    frontmatter: Maybe<MdxFrontmatterFilterInput>;
    slug: Maybe<StringQueryOperatorInput>;
    body: Maybe<StringQueryOperatorInput>;
    excerpt: Maybe<StringQueryOperatorInput>;
    headings: Maybe<MdxHeadingMdxFilterListInput>;
    html: Maybe<StringQueryOperatorInput>;
    mdxAST: Maybe<JSONQueryOperatorInput>;
    tableOfContents: Maybe<JSONQueryOperatorInput>;
    timeToRead: Maybe<IntQueryOperatorInput>;
    wordCount: Maybe<MdxWordCountFilterInput>;
    fields: Maybe<MdxFieldsFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allMdxArgs = {
    filter: Maybe<MdxFilterInput>;
    sort: Maybe<MdxSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_experienceYamlArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    companyName: Maybe<StringQueryOperatorInput>;
    title: Maybe<StringQueryOperatorInput>;
    location: Maybe<StringQueryOperatorInput>;
    type: Maybe<StringQueryOperatorInput>;
    content: Maybe<ExperienceYamlContentFilterInput>;
  };

  type Query_allExperienceYamlArgs = {
    filter: Maybe<ExperienceYamlFilterInput>;
    sort: Maybe<ExperienceYamlSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_projectsJsonArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    title: Maybe<StringQueryOperatorInput>;
    dates: Maybe<StringQueryOperatorInput>;
    description: Maybe<StringQueryOperatorInput>;
    image: Maybe<FileFilterInput>;
    github: Maybe<StringQueryOperatorInput>;
  };

  type Query_allProjectsJsonArgs = {
    filter: Maybe<ProjectsJsonFilterInput>;
    sort: Maybe<ProjectsJsonSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_siteBuildMetadataArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    buildTime: Maybe<DateQueryOperatorInput>;
  };

  type Query_allSiteBuildMetadataArgs = {
    filter: Maybe<SiteBuildMetadataFilterInput>;
    sort: Maybe<SiteBuildMetadataSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Query_sitePluginArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    resolve: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    version: Maybe<StringQueryOperatorInput>;
    pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs: Maybe<StringQueryOperatorInput>;
    browserAPIs: Maybe<StringQueryOperatorInput>;
    ssrAPIs: Maybe<StringQueryOperatorInput>;
    pluginFilepath: Maybe<StringQueryOperatorInput>;
    packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  };

  type Query_allSitePluginArgs = {
    filter: Maybe<SitePluginFilterInput>;
    sort: Maybe<SitePluginSortInput>;
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
  };

  type Site = Node & {
    readonly buildTime: Maybe<Scalars['Date']>;
    readonly siteMetadata: Maybe<SiteSiteMetadata>;
    readonly port: Maybe<Scalars['Int']>;
    readonly host: Maybe<Scalars['String']>;
    readonly polyfill: Maybe<Scalars['Boolean']>;
    readonly pathPrefix: Maybe<Scalars['String']>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type Site_buildTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type SiteBuildMetadata = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly buildTime: Maybe<Scalars['Date']>;
  };

  type SiteBuildMetadata_buildTimeArgs = {
    formatString: Maybe<Scalars['String']>;
    fromNow: Maybe<Scalars['Boolean']>;
    difference: Maybe<Scalars['String']>;
    locale: Maybe<Scalars['String']>;
  };

  type SiteBuildMetadataConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  };

  type SiteBuildMetadataConnection_distinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataEdge = {
    readonly next: Maybe<SiteBuildMetadata>;
    readonly node: SiteBuildMetadata;
    readonly previous: Maybe<SiteBuildMetadata>;
  };

  enum SiteBuildMetadataFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    buildTime = 'buildTime',
  }

  type SiteBuildMetadataFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly buildTime: Maybe<DateQueryOperatorInput>;
  };

  type SiteBuildMetadataGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type SiteBuildMetadataSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SiteConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<SiteGroupConnection>;
  };

  type SiteConnection_distinctArgs = {
    field: SiteFieldsEnum;
  };

  type SiteConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: SiteFieldsEnum;
  };

  type SiteEdge = {
    readonly next: Maybe<Site>;
    readonly node: Site;
    readonly previous: Maybe<Site>;
  };

  enum SiteFieldsEnum {
    buildTime = 'buildTime',
    siteMetadata___title = 'siteMetadata.title',
    siteMetadata___description = 'siteMetadata.description',
    siteMetadata___author___fullName = 'siteMetadata.author.fullName',
    siteMetadata___author___firstName = 'siteMetadata.author.firstName',
    siteMetadata___author___lastName = 'siteMetadata.author.lastName',
    siteMetadata___siteUrl = 'siteMetadata.siteUrl',
    siteMetadata___socialLinks___stackOverflow = 'siteMetadata.socialLinks.stackOverflow',
    siteMetadata___socialLinks___linkedin = 'siteMetadata.socialLinks.linkedin',
    siteMetadata___socialLinks___github = 'siteMetadata.socialLinks.github',
    siteMetadata___socialLinks___email = 'siteMetadata.socialLinks.email',
    port = 'port',
    host = 'host',
    polyfill = 'polyfill',
    pathPrefix = 'pathPrefix',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
  }

  type SiteFilterInput = {
    readonly buildTime: Maybe<DateQueryOperatorInput>;
    readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
    readonly port: Maybe<IntQueryOperatorInput>;
    readonly host: Maybe<StringQueryOperatorInput>;
    readonly polyfill: Maybe<BooleanQueryOperatorInput>;
    readonly pathPrefix: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type SiteGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type SitePage = Node & {
    readonly path: Scalars['String'];
    readonly component: Scalars['String'];
    readonly internalComponentName: Scalars['String'];
    readonly componentChunkName: Scalars['String'];
    readonly matchPath: Maybe<Scalars['String']>;
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
    readonly context: Maybe<SitePageContext>;
    readonly pluginCreator: Maybe<SitePlugin>;
    readonly pluginCreatorId: Maybe<Scalars['String']>;
    readonly componentPath: Maybe<Scalars['String']>;
  };

  type SitePageConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<SitePageGroupConnection>;
  };

  type SitePageConnection_distinctArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: SitePageFieldsEnum;
  };

  type SitePageContext = {
    readonly id: Maybe<Scalars['String']>;
    readonly slug: Maybe<Scalars['String']>;
    readonly blogPath: Maybe<Scalars['String']>;
    readonly previous: Maybe<SitePageContextPrevious>;
    readonly next: Maybe<SitePageContextNext>;
  };

  type SitePageContextFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
    readonly blogPath: Maybe<StringQueryOperatorInput>;
    readonly previous: Maybe<SitePageContextPreviousFilterInput>;
    readonly next: Maybe<SitePageContextNextFilterInput>;
  };

  type SitePageContextNext = {
    readonly id: Maybe<Scalars['String']>;
    readonly fields: Maybe<SitePageContextNextFields>;
    readonly frontmatter: Maybe<SitePageContextNextFrontmatter>;
  };

  type SitePageContextNextFields = {
    readonly blogPath: Maybe<Scalars['String']>;
    readonly slug: Maybe<Scalars['String']>;
  };

  type SitePageContextNextFieldsFilterInput = {
    readonly blogPath: Maybe<StringQueryOperatorInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextNextFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly fields: Maybe<SitePageContextNextFieldsFilterInput>;
    readonly frontmatter: Maybe<SitePageContextNextFrontmatterFilterInput>;
  };

  type SitePageContextNextFrontmatter = {
    readonly title: Maybe<Scalars['String']>;
    readonly hidden: Maybe<Scalars['Boolean']>;
  };

  type SitePageContextNextFrontmatterFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly hidden: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePageContextPrevious = {
    readonly id: Maybe<Scalars['String']>;
    readonly fields: Maybe<SitePageContextPreviousFields>;
    readonly frontmatter: Maybe<SitePageContextPreviousFrontmatter>;
  };

  type SitePageContextPreviousFields = {
    readonly blogPath: Maybe<Scalars['String']>;
    readonly slug: Maybe<Scalars['String']>;
  };

  type SitePageContextPreviousFieldsFilterInput = {
    readonly blogPath: Maybe<StringQueryOperatorInput>;
    readonly slug: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextPreviousFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly fields: Maybe<SitePageContextPreviousFieldsFilterInput>;
    readonly frontmatter: Maybe<SitePageContextPreviousFrontmatterFilterInput>;
  };

  type SitePageContextPreviousFrontmatter = {
    readonly title: Maybe<Scalars['String']>;
    readonly hidden: Maybe<Scalars['Boolean']>;
  };

  type SitePageContextPreviousFrontmatterFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly hidden: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePageEdge = {
    readonly next: Maybe<SitePage>;
    readonly node: SitePage;
    readonly previous: Maybe<SitePage>;
  };

  enum SitePageFieldsEnum {
    path = 'path',
    component = 'component',
    internalComponentName = 'internalComponentName',
    componentChunkName = 'componentChunkName',
    matchPath = 'matchPath',
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
    context___id = 'context.id',
    context___slug = 'context.slug',
    context___blogPath = 'context.blogPath',
    context___previous___id = 'context.previous.id',
    context___previous___fields___blogPath = 'context.previous.fields.blogPath',
    context___previous___fields___slug = 'context.previous.fields.slug',
    context___previous___frontmatter___title = 'context.previous.frontmatter.title',
    context___previous___frontmatter___hidden = 'context.previous.frontmatter.hidden',
    context___next___id = 'context.next.id',
    context___next___fields___blogPath = 'context.next.fields.blogPath',
    context___next___fields___slug = 'context.next.fields.slug',
    context___next___frontmatter___title = 'context.next.frontmatter.title',
    context___next___frontmatter___hidden = 'context.next.frontmatter.hidden',
    pluginCreator___id = 'pluginCreator.id',
    pluginCreator___parent___id = 'pluginCreator.parent.id',
    pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
    pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
    pluginCreator___parent___children = 'pluginCreator.parent.children',
    pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
    pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
    pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
    pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
    pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
    pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
    pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
    pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
    pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
    pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
    pluginCreator___children = 'pluginCreator.children',
    pluginCreator___children___id = 'pluginCreator.children.id',
    pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
    pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
    pluginCreator___children___children = 'pluginCreator.children.children',
    pluginCreator___children___children___id = 'pluginCreator.children.children.id',
    pluginCreator___children___children___children = 'pluginCreator.children.children.children',
    pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
    pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
    pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
    pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
    pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
    pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
    pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
    pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
    pluginCreator___internal___content = 'pluginCreator.internal.content',
    pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
    pluginCreator___internal___description = 'pluginCreator.internal.description',
    pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
    pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
    pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
    pluginCreator___internal___owner = 'pluginCreator.internal.owner',
    pluginCreator___internal___type = 'pluginCreator.internal.type',
    pluginCreator___resolve = 'pluginCreator.resolve',
    pluginCreator___name = 'pluginCreator.name',
    pluginCreator___version = 'pluginCreator.version',
    pluginCreator___pluginOptions___plugins = 'pluginCreator.pluginOptions.plugins',
    pluginCreator___pluginOptions___plugins___resolve = 'pluginCreator.pluginOptions.plugins.resolve',
    pluginCreator___pluginOptions___plugins___id = 'pluginCreator.pluginOptions.plugins.id',
    pluginCreator___pluginOptions___plugins___name = 'pluginCreator.pluginOptions.plugins.name',
    pluginCreator___pluginOptions___plugins___version = 'pluginCreator.pluginOptions.plugins.version',
    pluginCreator___pluginOptions___plugins___nodeAPIs = 'pluginCreator.pluginOptions.plugins.nodeAPIs',
    pluginCreator___pluginOptions___plugins___browserAPIs = 'pluginCreator.pluginOptions.plugins.browserAPIs',
    pluginCreator___pluginOptions___plugins___pluginFilepath = 'pluginCreator.pluginOptions.plugins.pluginFilepath',
    pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
    pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
    pluginCreator___pluginOptions___maxWidth = 'pluginCreator.pluginOptions.maxWidth',
    pluginCreator___pluginOptions___linkImagesToOriginal = 'pluginCreator.pluginOptions.linkImagesToOriginal',
    pluginCreator___pluginOptions___showCaptions = 'pluginCreator.pluginOptions.showCaptions',
    pluginCreator___pluginOptions___markdownCaptions = 'pluginCreator.pluginOptions.markdownCaptions',
    pluginCreator___pluginOptions___sizeByPixelDensity = 'pluginCreator.pluginOptions.sizeByPixelDensity',
    pluginCreator___pluginOptions___backgroundColor = 'pluginCreator.pluginOptions.backgroundColor',
    pluginCreator___pluginOptions___quality = 'pluginCreator.pluginOptions.quality',
    pluginCreator___pluginOptions___withWebp = 'pluginCreator.pluginOptions.withWebp',
    pluginCreator___pluginOptions___tracedSVG = 'pluginCreator.pluginOptions.tracedSVG',
    pluginCreator___pluginOptions___loading = 'pluginCreator.pluginOptions.loading',
    pluginCreator___pluginOptions___disableBgImageOnAlpha = 'pluginCreator.pluginOptions.disableBgImageOnAlpha',
    pluginCreator___pluginOptions___disableBgImage = 'pluginCreator.pluginOptions.disableBgImage',
    pluginCreator___pluginOptions___extensions = 'pluginCreator.pluginOptions.extensions',
    pluginCreator___pluginOptions___lessBabel = 'pluginCreator.pluginOptions.lessBabel',
    pluginCreator___pluginOptions___mediaTypes = 'pluginCreator.pluginOptions.mediaTypes',
    pluginCreator___pluginOptions___base64Width = 'pluginCreator.pluginOptions.base64Width',
    pluginCreator___pluginOptions___stripMetadata = 'pluginCreator.pluginOptions.stripMetadata',
    pluginCreator___pluginOptions___defaultQuality = 'pluginCreator.pluginOptions.defaultQuality',
    pluginCreator___pluginOptions___failOnError = 'pluginCreator.pluginOptions.failOnError',
    pluginCreator___pluginOptions___titleTemplate = 'pluginCreator.pluginOptions.titleTemplate',
    pluginCreator___pluginOptions___language = 'pluginCreator.pluginOptions.language',
    pluginCreator___pluginOptions___openGraph___type = 'pluginCreator.pluginOptions.openGraph.type',
    pluginCreator___pluginOptions___openGraph___locale = 'pluginCreator.pluginOptions.openGraph.locale',
    pluginCreator___pluginOptions___openGraph___url = 'pluginCreator.pluginOptions.openGraph.url',
    pluginCreator___pluginOptions___openGraph___site_name = 'pluginCreator.pluginOptions.openGraph.site_name',
    pluginCreator___pluginOptions___openGraph___title = 'pluginCreator.pluginOptions.openGraph.title',
    pluginCreator___pluginOptions___openGraph___description = 'pluginCreator.pluginOptions.openGraph.description',
    pluginCreator___pluginOptions___openGraph___images = 'pluginCreator.pluginOptions.openGraph.images',
    pluginCreator___pluginOptions___twitter___handle = 'pluginCreator.pluginOptions.twitter.handle',
    pluginCreator___pluginOptions___twitter___site = 'pluginCreator.pluginOptions.twitter.site',
    pluginCreator___pluginOptions___twitter___cardType = 'pluginCreator.pluginOptions.twitter.cardType',
    pluginCreator___pluginOptions___head = 'pluginCreator.pluginOptions.head',
    pluginCreator___pluginOptions___anonymize = 'pluginCreator.pluginOptions.anonymize',
    pluginCreator___pluginOptions___respectDNT = 'pluginCreator.pluginOptions.respectDNT',
    pluginCreator___pluginOptions___exclude = 'pluginCreator.pluginOptions.exclude',
    pluginCreator___pluginOptions___pageTransitionDelay = 'pluginCreator.pluginOptions.pageTransitionDelay',
    pluginCreator___pluginOptions___output = 'pluginCreator.pluginOptions.output',
    pluginCreator___pluginOptions___createLinkInHead = 'pluginCreator.pluginOptions.createLinkInHead',
    pluginCreator___pluginOptions___policy = 'pluginCreator.pluginOptions.policy',
    pluginCreator___pluginOptions___policy___userAgent = 'pluginCreator.pluginOptions.policy.userAgent',
    pluginCreator___pluginOptions___policy___allow = 'pluginCreator.pluginOptions.policy.allow',
    pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
    pluginCreator___pluginOptions___description = 'pluginCreator.pluginOptions.description',
    pluginCreator___pluginOptions___lang = 'pluginCreator.pluginOptions.lang',
    pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
    pluginCreator___pluginOptions___background_color = 'pluginCreator.pluginOptions.background_color',
    pluginCreator___pluginOptions___theme_color = 'pluginCreator.pluginOptions.theme_color',
    pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
    pluginCreator___pluginOptions___icon = 'pluginCreator.pluginOptions.icon',
    pluginCreator___pluginOptions___legacy = 'pluginCreator.pluginOptions.legacy',
    pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator.pluginOptions.theme_color_in_head',
    pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator.pluginOptions.cache_busting_mode',
    pluginCreator___pluginOptions___crossOrigin = 'pluginCreator.pluginOptions.crossOrigin',
    pluginCreator___pluginOptions___include_favicon = 'pluginCreator.pluginOptions.include_favicon',
    pluginCreator___pluginOptions___cacheDigest = 'pluginCreator.pluginOptions.cacheDigest',
    pluginCreator___pluginOptions___isTSX = 'pluginCreator.pluginOptions.isTSX',
    pluginCreator___pluginOptions___jsxPragma = 'pluginCreator.pluginOptions.jsxPragma',
    pluginCreator___pluginOptions___allExtensions = 'pluginCreator.pluginOptions.allExtensions',
    pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
    pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
    pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
    pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
    pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
    pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
    pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
    pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
    pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
    pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
    pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
    pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
    pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
    pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
    pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
    pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
    pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
    pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
    pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
    pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
    pluginCreatorId = 'pluginCreatorId',
    componentPath = 'componentPath',
  }

  type SitePageFilterInput = {
    readonly path: Maybe<StringQueryOperatorInput>;
    readonly component: Maybe<StringQueryOperatorInput>;
    readonly internalComponentName: Maybe<StringQueryOperatorInput>;
    readonly componentChunkName: Maybe<StringQueryOperatorInput>;
    readonly matchPath: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
    readonly context: Maybe<SitePageContextFilterInput>;
    readonly pluginCreator: Maybe<SitePluginFilterInput>;
    readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
    readonly componentPath: Maybe<StringQueryOperatorInput>;
  };

  type SitePageGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type SitePageSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SitePlugin = Node & {
    readonly id: Scalars['ID'];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly resolve: Maybe<Scalars['String']>;
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
    readonly pluginOptions: Maybe<SitePluginPluginOptions>;
    readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly pluginFilepath: Maybe<Scalars['String']>;
    readonly packageJson: Maybe<SitePluginPackageJson>;
  };

  type SitePluginConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars['String']>;
    readonly group: ReadonlyArray<SitePluginGroupConnection>;
  };

  type SitePluginConnection_distinctArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>;
    limit: Maybe<Scalars['Int']>;
    field: SitePluginFieldsEnum;
  };

  type SitePluginEdge = {
    readonly next: Maybe<SitePlugin>;
    readonly node: SitePlugin;
    readonly previous: Maybe<SitePlugin>;
  };

  enum SitePluginFieldsEnum {
    id = 'id',
    parent___id = 'parent.id',
    parent___parent___id = 'parent.parent.id',
    parent___parent___parent___id = 'parent.parent.parent.id',
    parent___parent___parent___children = 'parent.parent.parent.children',
    parent___parent___children = 'parent.parent.children',
    parent___parent___children___id = 'parent.parent.children.id',
    parent___parent___children___children = 'parent.parent.children.children',
    parent___parent___internal___content = 'parent.parent.internal.content',
    parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
    parent___parent___internal___description = 'parent.parent.internal.description',
    parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
    parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
    parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
    parent___parent___internal___owner = 'parent.parent.internal.owner',
    parent___parent___internal___type = 'parent.parent.internal.type',
    parent___children = 'parent.children',
    parent___children___id = 'parent.children.id',
    parent___children___parent___id = 'parent.children.parent.id',
    parent___children___parent___children = 'parent.children.parent.children',
    parent___children___children = 'parent.children.children',
    parent___children___children___id = 'parent.children.children.id',
    parent___children___children___children = 'parent.children.children.children',
    parent___children___internal___content = 'parent.children.internal.content',
    parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
    parent___children___internal___description = 'parent.children.internal.description',
    parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
    parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
    parent___children___internal___mediaType = 'parent.children.internal.mediaType',
    parent___children___internal___owner = 'parent.children.internal.owner',
    parent___children___internal___type = 'parent.children.internal.type',
    parent___internal___content = 'parent.internal.content',
    parent___internal___contentDigest = 'parent.internal.contentDigest',
    parent___internal___description = 'parent.internal.description',
    parent___internal___fieldOwners = 'parent.internal.fieldOwners',
    parent___internal___ignoreType = 'parent.internal.ignoreType',
    parent___internal___mediaType = 'parent.internal.mediaType',
    parent___internal___owner = 'parent.internal.owner',
    parent___internal___type = 'parent.internal.type',
    children = 'children',
    children___id = 'children.id',
    children___parent___id = 'children.parent.id',
    children___parent___parent___id = 'children.parent.parent.id',
    children___parent___parent___children = 'children.parent.parent.children',
    children___parent___children = 'children.parent.children',
    children___parent___children___id = 'children.parent.children.id',
    children___parent___children___children = 'children.parent.children.children',
    children___parent___internal___content = 'children.parent.internal.content',
    children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
    children___parent___internal___description = 'children.parent.internal.description',
    children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
    children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
    children___parent___internal___mediaType = 'children.parent.internal.mediaType',
    children___parent___internal___owner = 'children.parent.internal.owner',
    children___parent___internal___type = 'children.parent.internal.type',
    children___children = 'children.children',
    children___children___id = 'children.children.id',
    children___children___parent___id = 'children.children.parent.id',
    children___children___parent___children = 'children.children.parent.children',
    children___children___children = 'children.children.children',
    children___children___children___id = 'children.children.children.id',
    children___children___children___children = 'children.children.children.children',
    children___children___internal___content = 'children.children.internal.content',
    children___children___internal___contentDigest = 'children.children.internal.contentDigest',
    children___children___internal___description = 'children.children.internal.description',
    children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
    children___children___internal___ignoreType = 'children.children.internal.ignoreType',
    children___children___internal___mediaType = 'children.children.internal.mediaType',
    children___children___internal___owner = 'children.children.internal.owner',
    children___children___internal___type = 'children.children.internal.type',
    children___internal___content = 'children.internal.content',
    children___internal___contentDigest = 'children.internal.contentDigest',
    children___internal___description = 'children.internal.description',
    children___internal___fieldOwners = 'children.internal.fieldOwners',
    children___internal___ignoreType = 'children.internal.ignoreType',
    children___internal___mediaType = 'children.internal.mediaType',
    children___internal___owner = 'children.internal.owner',
    children___internal___type = 'children.internal.type',
    internal___content = 'internal.content',
    internal___contentDigest = 'internal.contentDigest',
    internal___description = 'internal.description',
    internal___fieldOwners = 'internal.fieldOwners',
    internal___ignoreType = 'internal.ignoreType',
    internal___mediaType = 'internal.mediaType',
    internal___owner = 'internal.owner',
    internal___type = 'internal.type',
    resolve = 'resolve',
    name = 'name',
    version = 'version',
    pluginOptions___plugins = 'pluginOptions.plugins',
    pluginOptions___plugins___resolve = 'pluginOptions.plugins.resolve',
    pluginOptions___plugins___id = 'pluginOptions.plugins.id',
    pluginOptions___plugins___name = 'pluginOptions.plugins.name',
    pluginOptions___plugins___version = 'pluginOptions.plugins.version',
    pluginOptions___plugins___pluginOptions___maxWidth = 'pluginOptions.plugins.pluginOptions.maxWidth',
    pluginOptions___plugins___pluginOptions___linkImagesToOriginal = 'pluginOptions.plugins.pluginOptions.linkImagesToOriginal',
    pluginOptions___plugins___pluginOptions___showCaptions = 'pluginOptions.plugins.pluginOptions.showCaptions',
    pluginOptions___plugins___pluginOptions___markdownCaptions = 'pluginOptions.plugins.pluginOptions.markdownCaptions',
    pluginOptions___plugins___pluginOptions___sizeByPixelDensity = 'pluginOptions.plugins.pluginOptions.sizeByPixelDensity',
    pluginOptions___plugins___pluginOptions___backgroundColor = 'pluginOptions.plugins.pluginOptions.backgroundColor',
    pluginOptions___plugins___pluginOptions___quality = 'pluginOptions.plugins.pluginOptions.quality',
    pluginOptions___plugins___pluginOptions___withWebp = 'pluginOptions.plugins.pluginOptions.withWebp',
    pluginOptions___plugins___pluginOptions___tracedSVG = 'pluginOptions.plugins.pluginOptions.tracedSVG',
    pluginOptions___plugins___pluginOptions___loading = 'pluginOptions.plugins.pluginOptions.loading',
    pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha = 'pluginOptions.plugins.pluginOptions.disableBgImageOnAlpha',
    pluginOptions___plugins___pluginOptions___disableBgImage = 'pluginOptions.plugins.pluginOptions.disableBgImage',
    pluginOptions___plugins___nodeAPIs = 'pluginOptions.plugins.nodeAPIs',
    pluginOptions___plugins___browserAPIs = 'pluginOptions.plugins.browserAPIs',
    pluginOptions___plugins___pluginFilepath = 'pluginOptions.plugins.pluginFilepath',
    pluginOptions___path = 'pluginOptions.path',
    pluginOptions___name = 'pluginOptions.name',
    pluginOptions___maxWidth = 'pluginOptions.maxWidth',
    pluginOptions___linkImagesToOriginal = 'pluginOptions.linkImagesToOriginal',
    pluginOptions___showCaptions = 'pluginOptions.showCaptions',
    pluginOptions___markdownCaptions = 'pluginOptions.markdownCaptions',
    pluginOptions___sizeByPixelDensity = 'pluginOptions.sizeByPixelDensity',
    pluginOptions___backgroundColor = 'pluginOptions.backgroundColor',
    pluginOptions___quality = 'pluginOptions.quality',
    pluginOptions___withWebp = 'pluginOptions.withWebp',
    pluginOptions___tracedSVG = 'pluginOptions.tracedSVG',
    pluginOptions___loading = 'pluginOptions.loading',
    pluginOptions___disableBgImageOnAlpha = 'pluginOptions.disableBgImageOnAlpha',
    pluginOptions___disableBgImage = 'pluginOptions.disableBgImage',
    pluginOptions___extensions = 'pluginOptions.extensions',
    pluginOptions___lessBabel = 'pluginOptions.lessBabel',
    pluginOptions___mediaTypes = 'pluginOptions.mediaTypes',
    pluginOptions___base64Width = 'pluginOptions.base64Width',
    pluginOptions___stripMetadata = 'pluginOptions.stripMetadata',
    pluginOptions___defaultQuality = 'pluginOptions.defaultQuality',
    pluginOptions___failOnError = 'pluginOptions.failOnError',
    pluginOptions___titleTemplate = 'pluginOptions.titleTemplate',
    pluginOptions___language = 'pluginOptions.language',
    pluginOptions___openGraph___type = 'pluginOptions.openGraph.type',
    pluginOptions___openGraph___locale = 'pluginOptions.openGraph.locale',
    pluginOptions___openGraph___url = 'pluginOptions.openGraph.url',
    pluginOptions___openGraph___site_name = 'pluginOptions.openGraph.site_name',
    pluginOptions___openGraph___title = 'pluginOptions.openGraph.title',
    pluginOptions___openGraph___description = 'pluginOptions.openGraph.description',
    pluginOptions___openGraph___images = 'pluginOptions.openGraph.images',
    pluginOptions___openGraph___images___url = 'pluginOptions.openGraph.images.url',
    pluginOptions___openGraph___images___width = 'pluginOptions.openGraph.images.width',
    pluginOptions___openGraph___images___height = 'pluginOptions.openGraph.images.height',
    pluginOptions___openGraph___images___alt = 'pluginOptions.openGraph.images.alt',
    pluginOptions___twitter___handle = 'pluginOptions.twitter.handle',
    pluginOptions___twitter___site = 'pluginOptions.twitter.site',
    pluginOptions___twitter___cardType = 'pluginOptions.twitter.cardType',
    pluginOptions___head = 'pluginOptions.head',
    pluginOptions___anonymize = 'pluginOptions.anonymize',
    pluginOptions___respectDNT = 'pluginOptions.respectDNT',
    pluginOptions___exclude = 'pluginOptions.exclude',
    pluginOptions___pageTransitionDelay = 'pluginOptions.pageTransitionDelay',
    pluginOptions___output = 'pluginOptions.output',
    pluginOptions___createLinkInHead = 'pluginOptions.createLinkInHead',
    pluginOptions___policy = 'pluginOptions.policy',
    pluginOptions___policy___userAgent = 'pluginOptions.policy.userAgent',
    pluginOptions___policy___allow = 'pluginOptions.policy.allow',
    pluginOptions___short_name = 'pluginOptions.short_name',
    pluginOptions___description = 'pluginOptions.description',
    pluginOptions___lang = 'pluginOptions.lang',
    pluginOptions___start_url = 'pluginOptions.start_url',
    pluginOptions___background_color = 'pluginOptions.background_color',
    pluginOptions___theme_color = 'pluginOptions.theme_color',
    pluginOptions___display = 'pluginOptions.display',
    pluginOptions___icon = 'pluginOptions.icon',
    pluginOptions___legacy = 'pluginOptions.legacy',
    pluginOptions___theme_color_in_head = 'pluginOptions.theme_color_in_head',
    pluginOptions___cache_busting_mode = 'pluginOptions.cache_busting_mode',
    pluginOptions___crossOrigin = 'pluginOptions.crossOrigin',
    pluginOptions___include_favicon = 'pluginOptions.include_favicon',
    pluginOptions___cacheDigest = 'pluginOptions.cacheDigest',
    pluginOptions___isTSX = 'pluginOptions.isTSX',
    pluginOptions___jsxPragma = 'pluginOptions.jsxPragma',
    pluginOptions___allExtensions = 'pluginOptions.allExtensions',
    pluginOptions___pathCheck = 'pluginOptions.pathCheck',
    nodeAPIs = 'nodeAPIs',
    browserAPIs = 'browserAPIs',
    ssrAPIs = 'ssrAPIs',
    pluginFilepath = 'pluginFilepath',
    packageJson___name = 'packageJson.name',
    packageJson___description = 'packageJson.description',
    packageJson___version = 'packageJson.version',
    packageJson___main = 'packageJson.main',
    packageJson___license = 'packageJson.license',
    packageJson___dependencies = 'packageJson.dependencies',
    packageJson___dependencies___name = 'packageJson.dependencies.name',
    packageJson___dependencies___version = 'packageJson.dependencies.version',
    packageJson___devDependencies = 'packageJson.devDependencies',
    packageJson___devDependencies___name = 'packageJson.devDependencies.name',
    packageJson___devDependencies___version = 'packageJson.devDependencies.version',
    packageJson___peerDependencies = 'packageJson.peerDependencies',
    packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
    packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
    packageJson___keywords = 'packageJson.keywords',
  }

  type SitePluginFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly resolve: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
    readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
    readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
    readonly browserAPIs: Maybe<StringQueryOperatorInput>;
    readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
    readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
    readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  };

  type SitePluginGroupConnection = {
    readonly totalCount: Scalars['Int'];
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars['String'];
    readonly fieldValue: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJson = {
    readonly name: Maybe<Scalars['String']>;
    readonly description: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
    readonly main: Maybe<Scalars['String']>;
    readonly license: Maybe<Scalars['String']>;
    readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
    readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
    readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
    readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  };

  type SitePluginPackageJsonDependencies = {
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
  };

  type SitePluginPackageJsonDevDependencies = {
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonDevDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDevDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
  };

  type SitePluginPackageJsonFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
    readonly main: Maybe<StringQueryOperatorInput>;
    readonly license: Maybe<StringQueryOperatorInput>;
    readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
    readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
    readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
    readonly keywords: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependencies = {
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
  };

  type SitePluginPluginOptions = {
    readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
    readonly path: Maybe<Scalars['String']>;
    readonly name: Maybe<Scalars['String']>;
    readonly maxWidth: Maybe<Scalars['Int']>;
    readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
    readonly showCaptions: Maybe<Scalars['Boolean']>;
    readonly markdownCaptions: Maybe<Scalars['Boolean']>;
    readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
    readonly backgroundColor: Maybe<Scalars['String']>;
    readonly quality: Maybe<Scalars['Int']>;
    readonly withWebp: Maybe<Scalars['Boolean']>;
    readonly tracedSVG: Maybe<Scalars['Boolean']>;
    readonly loading: Maybe<Scalars['String']>;
    readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
    readonly disableBgImage: Maybe<Scalars['Boolean']>;
    readonly extensions: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly lessBabel: Maybe<Scalars['Boolean']>;
    readonly mediaTypes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly base64Width: Maybe<Scalars['Int']>;
    readonly stripMetadata: Maybe<Scalars['Boolean']>;
    readonly defaultQuality: Maybe<Scalars['Int']>;
    readonly failOnError: Maybe<Scalars['Boolean']>;
    readonly titleTemplate: Maybe<Scalars['String']>;
    readonly language: Maybe<Scalars['String']>;
    readonly openGraph: Maybe<SitePluginPluginOptionsOpenGraph>;
    readonly twitter: Maybe<SitePluginPluginOptionsTwitter>;
    readonly head: Maybe<Scalars['Boolean']>;
    readonly anonymize: Maybe<Scalars['Boolean']>;
    readonly respectDNT: Maybe<Scalars['Boolean']>;
    readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly pageTransitionDelay: Maybe<Scalars['Int']>;
    readonly output: Maybe<Scalars['String']>;
    readonly createLinkInHead: Maybe<Scalars['Boolean']>;
    readonly policy: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPolicy>>>;
    readonly short_name: Maybe<Scalars['String']>;
    readonly description: Maybe<Scalars['String']>;
    readonly lang: Maybe<Scalars['String']>;
    readonly start_url: Maybe<Scalars['String']>;
    readonly background_color: Maybe<Scalars['String']>;
    readonly theme_color: Maybe<Scalars['String']>;
    readonly display: Maybe<Scalars['String']>;
    readonly icon: Maybe<Scalars['String']>;
    readonly legacy: Maybe<Scalars['Boolean']>;
    readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
    readonly cache_busting_mode: Maybe<Scalars['String']>;
    readonly crossOrigin: Maybe<Scalars['String']>;
    readonly include_favicon: Maybe<Scalars['Boolean']>;
    readonly cacheDigest: Maybe<Scalars['String']>;
    readonly isTSX: Maybe<Scalars['Boolean']>;
    readonly jsxPragma: Maybe<Scalars['String']>;
    readonly allExtensions: Maybe<Scalars['Boolean']>;
    readonly pathCheck: Maybe<Scalars['Boolean']>;
  };

  type SitePluginPluginOptionsFilterInput = {
    readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
    readonly path: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly maxWidth: Maybe<IntQueryOperatorInput>;
    readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
    readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
    readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
    readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
    readonly backgroundColor: Maybe<StringQueryOperatorInput>;
    readonly quality: Maybe<IntQueryOperatorInput>;
    readonly withWebp: Maybe<BooleanQueryOperatorInput>;
    readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
    readonly loading: Maybe<StringQueryOperatorInput>;
    readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
    readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
    readonly extensions: Maybe<StringQueryOperatorInput>;
    readonly lessBabel: Maybe<BooleanQueryOperatorInput>;
    readonly mediaTypes: Maybe<StringQueryOperatorInput>;
    readonly base64Width: Maybe<IntQueryOperatorInput>;
    readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
    readonly defaultQuality: Maybe<IntQueryOperatorInput>;
    readonly failOnError: Maybe<BooleanQueryOperatorInput>;
    readonly titleTemplate: Maybe<StringQueryOperatorInput>;
    readonly language: Maybe<StringQueryOperatorInput>;
    readonly openGraph: Maybe<SitePluginPluginOptionsOpenGraphFilterInput>;
    readonly twitter: Maybe<SitePluginPluginOptionsTwitterFilterInput>;
    readonly head: Maybe<BooleanQueryOperatorInput>;
    readonly anonymize: Maybe<BooleanQueryOperatorInput>;
    readonly respectDNT: Maybe<BooleanQueryOperatorInput>;
    readonly exclude: Maybe<StringQueryOperatorInput>;
    readonly pageTransitionDelay: Maybe<IntQueryOperatorInput>;
    readonly output: Maybe<StringQueryOperatorInput>;
    readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
    readonly policy: Maybe<SitePluginPluginOptionsPolicyFilterListInput>;
    readonly short_name: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly lang: Maybe<StringQueryOperatorInput>;
    readonly start_url: Maybe<StringQueryOperatorInput>;
    readonly background_color: Maybe<StringQueryOperatorInput>;
    readonly theme_color: Maybe<StringQueryOperatorInput>;
    readonly display: Maybe<StringQueryOperatorInput>;
    readonly icon: Maybe<StringQueryOperatorInput>;
    readonly legacy: Maybe<BooleanQueryOperatorInput>;
    readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
    readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
    readonly crossOrigin: Maybe<StringQueryOperatorInput>;
    readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
    readonly cacheDigest: Maybe<StringQueryOperatorInput>;
    readonly isTSX: Maybe<BooleanQueryOperatorInput>;
    readonly jsxPragma: Maybe<StringQueryOperatorInput>;
    readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
    readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePluginPluginOptionsOpenGraph = {
    readonly type: Maybe<Scalars['String']>;
    readonly locale: Maybe<Scalars['String']>;
    readonly url: Maybe<Scalars['String']>;
    readonly site_name: Maybe<Scalars['String']>;
    readonly title: Maybe<Scalars['String']>;
    readonly description: Maybe<Scalars['String']>;
    readonly images: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsOpenGraphImages>>>;
  };

  type SitePluginPluginOptionsOpenGraphFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>;
    readonly locale: Maybe<StringQueryOperatorInput>;
    readonly url: Maybe<StringQueryOperatorInput>;
    readonly site_name: Maybe<StringQueryOperatorInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly images: Maybe<SitePluginPluginOptionsOpenGraphImagesFilterListInput>;
  };

  type SitePluginPluginOptionsOpenGraphImages = {
    readonly url: Maybe<Scalars['String']>;
    readonly width: Maybe<Scalars['Int']>;
    readonly height: Maybe<Scalars['Int']>;
    readonly alt: Maybe<Scalars['String']>;
  };

  type SitePluginPluginOptionsOpenGraphImagesFilterInput = {
    readonly url: Maybe<StringQueryOperatorInput>;
    readonly width: Maybe<IntQueryOperatorInput>;
    readonly height: Maybe<IntQueryOperatorInput>;
    readonly alt: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsOpenGraphImagesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPluginOptionsOpenGraphImagesFilterInput>;
  };

  type SitePluginPluginOptionsPlugins = {
    readonly resolve: Maybe<Scalars['String']>;
    readonly id: Maybe<Scalars['String']>;
    readonly name: Maybe<Scalars['String']>;
    readonly version: Maybe<Scalars['String']>;
    readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
    readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly pluginFilepath: Maybe<Scalars['String']>;
  };

  type SitePluginPluginOptionsPluginsFilterInput = {
    readonly resolve: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
    readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
    readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
    readonly browserAPIs: Maybe<StringQueryOperatorInput>;
    readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsPluginsFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
  };

  type SitePluginPluginOptionsPluginsPluginOptions = {
    readonly maxWidth: Maybe<Scalars['Int']>;
    readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
    readonly showCaptions: Maybe<Scalars['Boolean']>;
    readonly markdownCaptions: Maybe<Scalars['Boolean']>;
    readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
    readonly backgroundColor: Maybe<Scalars['String']>;
    readonly quality: Maybe<Scalars['Int']>;
    readonly withWebp: Maybe<Scalars['Boolean']>;
    readonly tracedSVG: Maybe<Scalars['Boolean']>;
    readonly loading: Maybe<Scalars['String']>;
    readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
    readonly disableBgImage: Maybe<Scalars['Boolean']>;
  };

  type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
    readonly maxWidth: Maybe<IntQueryOperatorInput>;
    readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
    readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
    readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
    readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
    readonly backgroundColor: Maybe<StringQueryOperatorInput>;
    readonly quality: Maybe<IntQueryOperatorInput>;
    readonly withWebp: Maybe<BooleanQueryOperatorInput>;
    readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
    readonly loading: Maybe<StringQueryOperatorInput>;
    readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
    readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePluginPluginOptionsPolicy = {
    readonly userAgent: Maybe<Scalars['String']>;
    readonly allow: Maybe<Scalars['String']>;
  };

  type SitePluginPluginOptionsPolicyFilterInput = {
    readonly userAgent: Maybe<StringQueryOperatorInput>;
    readonly allow: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsPolicyFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPluginOptionsPolicyFilterInput>;
  };

  type SitePluginPluginOptionsTwitter = {
    readonly handle: Maybe<Scalars['String']>;
    readonly site: Maybe<Scalars['String']>;
    readonly cardType: Maybe<Scalars['String']>;
  };

  type SitePluginPluginOptionsTwitterFilterInput = {
    readonly handle: Maybe<StringQueryOperatorInput>;
    readonly site: Maybe<StringQueryOperatorInput>;
    readonly cardType: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SiteSiteMetadata = {
    readonly title: Maybe<Scalars['String']>;
    readonly description: Maybe<Scalars['String']>;
    readonly author: Maybe<SiteSiteMetadataAuthor>;
    readonly siteUrl: Maybe<Scalars['String']>;
    readonly socialLinks: Maybe<SiteSiteMetadataSocialLinks>;
  };

  type SiteSiteMetadataAuthor = {
    readonly fullName: Maybe<Scalars['String']>;
    readonly firstName: Maybe<Scalars['String']>;
    readonly lastName: Maybe<Scalars['String']>;
  };

  type SiteSiteMetadataAuthorFilterInput = {
    readonly fullName: Maybe<StringQueryOperatorInput>;
    readonly firstName: Maybe<StringQueryOperatorInput>;
    readonly lastName: Maybe<StringQueryOperatorInput>;
  };

  type SiteSiteMetadataFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly author: Maybe<SiteSiteMetadataAuthorFilterInput>;
    readonly siteUrl: Maybe<StringQueryOperatorInput>;
    readonly socialLinks: Maybe<SiteSiteMetadataSocialLinksFilterInput>;
  };

  type SiteSiteMetadataSocialLinks = {
    readonly stackOverflow: Maybe<Scalars['String']>;
    readonly linkedin: Maybe<Scalars['String']>;
    readonly github: Maybe<Scalars['String']>;
    readonly email: Maybe<Scalars['String']>;
  };

  type SiteSiteMetadataSocialLinksFilterInput = {
    readonly stackOverflow: Maybe<StringQueryOperatorInput>;
    readonly linkedin: Maybe<StringQueryOperatorInput>;
    readonly github: Maybe<StringQueryOperatorInput>;
    readonly email: Maybe<StringQueryOperatorInput>;
  };

  type SiteSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  enum SortOrderEnum {
    ASC = 'ASC',
    DESC = 'DESC',
  }

  type StringQueryOperatorInput = {
    readonly eq: Maybe<Scalars['String']>;
    readonly ne: Maybe<Scalars['String']>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
    readonly regex: Maybe<Scalars['String']>;
    readonly glob: Maybe<Scalars['String']>;
  };

  type GatsbyImageSharpFluidFragment = Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >;

  type BlogPostByIdQueryVariables = Exact<{
    id: Scalars['String'];
  }>;

  type BlogPostByIdQuery = {
    readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }>;
    readonly mdx: Maybe<
      Pick<Mdx, 'id' | 'body'> & {
        readonly frontmatter: Maybe<
          Pick<MdxFrontmatter, 'title' | 'date' | 'category'> & {
            isoDate: MdxFrontmatter['date'];
          } & {
            readonly thumbnail: Maybe<{
              readonly childImageSharp: Maybe<{
                readonly fluid: Maybe<Pick<ImageSharpFluid, 'src'> & GatsbyImageSharpFluidFragment>;
                readonly openGraph: Maybe<Pick<ImageSharpFixed, 'src' | 'height' | 'width'>>;
              }>;
            }>;
          }
        >;
        readonly fields: Maybe<{ readonly readingTime: Maybe<Pick<MdxFieldsReadingTime, 'text'>> }>;
      }
    >;
  };

  type PagesQueryQueryVariables = Exact<{ [key: string]: never }>;

  type PagesQueryQuery = {
    readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> };
  };

  type FooterMetadataQueryVariables = Exact<{ [key: string]: never }>;

  type FooterMetadataQuery = {
    readonly site: Maybe<{
      readonly siteMetadata: Maybe<{
        readonly author: Maybe<Pick<SiteSiteMetadataAuthor, 'firstName' | 'lastName'>>;
      }>;
    }>;
  };

  type SEOMetadataQueryVariables = Exact<{ [key: string]: never }>;

  type SEOMetadataQuery = {
    readonly site: Maybe<{
      readonly siteMetadata: Maybe<
        Pick<SiteSiteMetadata, 'title' | 'description'> & {
          readonly author: Maybe<Pick<SiteSiteMetadataAuthor, 'fullName'>>;
        }
      >;
    }>;
  };

  type AboutContentQueryVariables = Exact<{ [key: string]: never }>;

  type AboutContentQuery = {
    readonly content: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'body'>> }>;
  };

  type BlogPostsQueryVariables = Exact<{ [key: string]: never }>;

  type BlogPostsQuery = {
    readonly allMdx: Pick<MdxConnection, 'totalCount'> & {
      readonly edges: ReadonlyArray<{
        readonly node: Pick<Mdx, 'id'> & {
          readonly frontmatter: Maybe<
            Pick<MdxFrontmatter, 'title' | 'date'> & {
              readonly thumbnail: Maybe<{
                readonly childImageSharp: Maybe<{
                  readonly fluid: Maybe<GatsbyImageSharpFluidFragment>;
                }>;
              }>;
            }
          >;
          readonly fields: Maybe<Pick<MdxFields, 'slug' | 'blogPath'>>;
        };
      }>;
    };
  };

  type ExperienceQueryVariables = Exact<{ [key: string]: never }>;

  type ExperienceQuery = {
    readonly work: {
      readonly nodes: ReadonlyArray<
        Pick<ExperienceYaml, 'companyName' | 'title' | 'location'> & {
          readonly content: Maybe<Pick<ExperienceYamlContent, 'body'>>;
        }
      >;
    };
    readonly startup: {
      readonly nodes: ReadonlyArray<
        Pick<ExperienceYaml, 'companyName' | 'title' | 'location'> & {
          readonly content: Maybe<Pick<ExperienceYamlContent, 'body'>>;
        }
      >;
    };
    readonly club: {
      readonly nodes: ReadonlyArray<
        Pick<ExperienceYaml, 'companyName' | 'title' | 'location'> & {
          readonly content: Maybe<Pick<ExperienceYamlContent, 'body'>>;
        }
      >;
    };
  };

  type ProjectsQueryVariables = Exact<{ [key: string]: never }>;

  type ProjectsQuery = {
    readonly allProjectsJson: {
      readonly nodes: ReadonlyArray<
        Pick<ProjectsJson, 'description' | 'github' | 'title' | 'dates'> & {
          readonly image: Maybe<{
            readonly childImageSharp: Maybe<{
              readonly fluid: Maybe<GatsbyImageSharpFluidFragment>;
            }>;
          }>;
        }
      >;
    };
  };

  type GatsbyImageSharpFixedFragment = Pick<
    ImageSharpFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet'
  >;

  type GatsbyImageSharpFluid_withWebpFragment = Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >;

  type LandingDataQueryVariables = Exact<{ [key: string]: never }>;

  type LandingDataQuery = {
    readonly site: Maybe<{
      readonly siteMetadata: Maybe<{
        readonly author: Maybe<Pick<SiteSiteMetadataAuthor, 'firstName' | 'lastName'>>;
        readonly socialLinks: Maybe<
          Pick<SiteSiteMetadataSocialLinks, 'linkedin' | 'stackOverflow' | 'github'>
        >;
      }>;
    }>;
    readonly me: Maybe<{
      readonly childImageSharp: Maybe<{ readonly fixed: Maybe<GatsbyImageSharpFixedFragment> }>;
    }>;
    readonly background: Maybe<{
      readonly childImageSharp: Maybe<{
        readonly fluid: Maybe<GatsbyImageSharpFluid_withWebpFragment>;
      }>;
    }>;
  };
}
