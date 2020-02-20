import { DraggableData } from 'react-draggable'
import { INode, IPort } from './chart'
import { IConfig } from './config'
import { IOffset, IPosition, ISize } from './generics'

export interface IOnDragNodeInput {
  config?: IConfig
  event: MouseEvent
  data: DraggableData
  id: string
}

export type IOnDragNode = (input: IOnDragNodeInput) => void

export interface IOnDragCanvasInput {
  config?: IConfig
  event: MouseEvent
  data: DraggableData
}

export type IOnDragCanvas = (input: IOnDragCanvasInput) => void

export interface IOnPortPositionChangeInput {
  config?: IConfig
  node: INode
  port: IPort
  el: HTMLDivElement
  nodesEl: HTMLDivElement | IOffset
}

export type IOnPortPositionChange = (input: IOnPortPositionChangeInput) => void

export interface ILinkBaseInput {
  config?: IConfig
  linkId: string
}

export interface IOnLinkBaseEvent extends ILinkBaseInput {
  startEvent: React.MouseEvent
  fromNodeId: string
  fromPortId: string
}

export type IOnLinkStart = (input: IOnLinkBaseEvent) => void

export interface IOnLinkMoveInput extends IOnLinkBaseEvent {
  toPosition: {
    x: number;
    y: number;
  }
}
export type IOnLinkMove = (input: IOnLinkMoveInput) => void

export type IOnLinkCancel = (input: IOnLinkBaseEvent) => void

export interface IOnLinkCompleteInput extends IOnLinkBaseEvent {
  toNodeId: string
  toPortId: string
}
export type IOnLinkComplete = (input: IOnLinkCompleteInput) => void

export type IOnLinkMouseEnter = (input: ILinkBaseInput) => void

export type IOnLinkMouseLeave = (input: ILinkBaseInput) => void

export type IOnLinkClick = (input: ILinkBaseInput) => void

export type IOnCanvasClick = (input: { config?: IConfig }) => void

export type IOnDeleteKey = (input: { config?: IConfig }) => void

export interface INodeBaseInput {
  config?: IConfig
  nodeId: string
}

export type IOnNodeMouseEnter = (input: INodeBaseInput) => void

export type IOnNodeMouseLeave = (input: INodeBaseInput) => void

export type IOnNodeClick = (input: INodeBaseInput) => void

export interface IOnNodeSizeChangeInput extends INodeBaseInput {
  size: ISize
}

export type IOnNodeSizeChange = (input: IOnNodeSizeChangeInput) => void

export interface IOnCanvasDropInput {
  config?: IConfig
  data: any
  position: IPosition
}

export type IOnCanvasDrop = (input: IOnCanvasDropInput) => void
