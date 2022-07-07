import { Modal } from '@resultadosdigitais/tangram-components'
import { react } from 'react'
import styled from 'styled-components'
import { Theme, Reset, Button } from '@resultadosdigitais/tangram-components'
import { useState, useRef } from 'react'

const ExampleBase = () => {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef()

  const closeModal = () => {
    setOpen(false)
    triggerRef.current && triggerRef.current.focus()
  }

  const openModal = () => {
    setOpen(true)
  }

  const StyledModalActions = styled(Modal.Actions)`
    justify-content: center;
  `

  return (
    <>
      <Button
        kind={Button.kinds.secondary}
        onClick={openModal}
        ref={triggerRef}
      >
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={closeModal}
        aria-describedby="modalDescription"
        aria-labelledby="modalTitle"
      >
        <Modal.Header id="modalTitle">Modal title</Modal.Header>
        <Modal.Content id="modalDescription">Modal content</Modal.Content>
        <StyledModalActions>
          <Button
            kind={Button.kinds.secondary}
            onClick={closeModal}
            ref={triggerRef}
          >
            Close Modal
          </Button>
        </StyledModalActions>
      </Modal>
    </>
  )
}

export default ExampleBase
