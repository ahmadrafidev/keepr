import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog'
import { Plus, Trash } from 'lucide-react'
import { SidebarSection } from '../types/sidebar'

interface ManageDialogProps {
  sections: SidebarSection[]
  onSectionsChange: (sections: SidebarSection[]) => void
}

export function ManageDialog({ sections, onSectionsChange }: ManageDialogProps) {
  const [newSectionTitle, setNewSectionTitle] = useState('')
  const [newItemTitle, setNewItemTitle] = useState('')
  const [newItemPath, setNewItemPath] = useState('')
  const [selectedSection, setSelectedSection] = useState<number | null>(null)

  const addSection = () => {
    if (!newSectionTitle.trim()) return
    onSectionsChange([...sections, { title: newSectionTitle, items: [] }])
    setNewSectionTitle('')
  }

  const addItem = () => {
    if (selectedSection === null || !newItemTitle.trim()) return
    const updatedSections = structuredClone(sections)
    updatedSections[selectedSection].items.push({
      title: newItemTitle,
      path: newItemPath || undefined
    })
    onSectionsChange(updatedSections)
    setNewItemTitle('')
    setNewItemPath('')
  }

  const deleteSection = (index: number) => {
    onSectionsChange(sections.filter((_, idx) => idx !== index))
  }

  const deleteItem = (sectionIndex: number, itemIndex: number) => {
    const updatedSections = structuredClone(sections)
    updatedSections[sectionIndex].items.splice(itemIndex, 1)
    onSectionsChange(updatedSections)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">Manage</Button>
      </DialogTrigger>

      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Manage Sidebar</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Add New Section</Label>
            <div className="flex gap-2 mt-1">
              <Input
                value={newSectionTitle}
                onChange={e => setNewSectionTitle(e.target.value)}
                placeholder="Section title"
              />
              <Button onClick={addSection}><Plus className="h-4 w-4" /></Button>
            </div>
          </div>

          {sections.map((section, sIdx) => (
            <div key={sIdx} className="border-t pt-4 space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-semibold">{section.title}</h4>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteSection(sIdx)}
                  className="text-red-500"
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                <Input
                  value={selectedSection === sIdx ? newItemTitle : ''}
                  onChange={e => { setSelectedSection(sIdx); setNewItemTitle(e.target.value) }}
                  placeholder="Item title"
                />
                <Input
                  value={selectedSection === sIdx ? newItemPath : ''}
                  onChange={e => setNewItemPath(e.target.value)}
                  placeholder="/path"
                />
                <Button onClick={addItem}><Plus className="w-4 h-4" /></Button>
              </div>

              <ul className="space-y-1 text-sm ml-2">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex justify-between">
                    <span>{item.title}</span>
                    <button onClick={() => deleteItem(sIdx, iIdx)} className="text-red-500">
                      <Trash className="w-3 h-3" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
} 